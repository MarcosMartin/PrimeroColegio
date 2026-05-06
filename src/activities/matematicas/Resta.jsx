import { useState } from 'react'

const EXERCISES = [
  { a: 5,  b: 2, emoji: '🍎' },
  { a: 8,  b: 3, emoji: '⭐' },
  { a: 7,  b: 4, emoji: '🐟' },
  { a: 6,  b: 1, emoji: '🎈' },
  { a: 9,  b: 5, emoji: '🌸' },
  { a: 10, b: 4, emoji: '🍕' },
  { a: 8,  b: 6, emoji: '🦋' },
  { a: 7,  b: 7, emoji: '🏀' },
  { a: 15, b: 5, emoji: '⚽' },
  { a: 20, b: 8, emoji: '🍦' },
  { a: 25, b: 12, emoji: '🌟' },
  { a: 30, b: 14, emoji: '🐥' },
]

function makeOptions(correct) {
  const opts = new Set([correct])
  while (opts.size < 4) {
    const n = Math.max(0, correct + Math.floor(Math.random() * 6) - 3)
    opts.add(n)
  }
  return [...opts].sort(() => Math.random() - 0.5).map(String)
}

function RestaExercise({ exercise, onAnswer, current, total, score }) {
  const { a, b, emoji } = exercise
  const answer = a - b
  const [options] = useState(() => makeOptions(answer))
  const [selected, setSelected] = useState(null)
  const [feedback, setFeedback] = useState(null)

  const handle = (opt) => {
    if (selected) return
    const correct = opt === String(answer)
    setSelected(opt)
    setFeedback(correct ? 'correct' : 'incorrect')
    setTimeout(() => onAnswer(correct), 1500)
  }

  const renderEmojis = () => {
    const items = []
    for (let i = 0; i < a && i < 15; i++) {
      items.push(
        <span
          key={i}
          className={`text-2xl transition-all ${i >= a - b ? 'opacity-100' : 'opacity-25 line-through'}`}
        >
          {emoji}
        </span>
      )
    }
    return items
  }

  return (
    <div className="p-4 flex flex-col gap-4 max-w-lg mx-auto">
      <div className="flex justify-between items-center text-sm text-gray-500 font-bold">
        <span>Pregunta {current + 1} de {total}</span>
        <span>{score} ⭐</span>
      </div>

      <div
        className={`bg-white rounded-2xl p-5 shadow-md text-center border-4 transition-all ${
          feedback === 'correct'   ? 'border-green-400 bg-green-50'  :
          feedback === 'incorrect' ? 'border-red-400 bg-red-50'      :
          'border-transparent'
        }`}
      >
        {a <= 15 && (
          <div className="flex flex-wrap gap-1 justify-center mb-3 p-2 bg-orange-50 rounded-xl border-2 border-orange-100">
            {renderEmojis()}
          </div>
        )}
        <div className="text-3xl font-black text-gray-800">
          {a} − {b} = <span className="text-orange-500">?</span>
        </div>
        <p className="text-gray-400 font-semibold text-sm mt-1">
          {a <= 15 ? `Tenemos ${a} y quitamos ${b}` : ''}
        </p>
        {feedback && (
          <p className={`text-xl font-black mt-2 ${feedback === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
            {feedback === 'correct' ? '¡Correcto! 🎉' : `❌ Era: ${answer}`}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {options.map(opt => {
          const isSel = selected === opt
          const isCorrect = opt === String(answer)
          const showResult = !!selected
          return (
            <button
              key={opt}
              onClick={() => handle(opt)}
              disabled={!!selected}
              className={`rounded-2xl p-4 text-3xl font-black border-4 transition-all active:scale-95 ${
                !showResult ? 'bg-white border-gray-200 hover:bg-orange-50 hover:border-orange-400'
                : isCorrect  ? 'bg-green-100 border-green-500 text-green-800'
                : isSel      ? 'bg-red-100 border-red-500 text-red-700'
                : 'bg-gray-100 border-gray-200 text-gray-400 opacity-60'
              }`}
            >
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ResultsPanel({ correct, total, onRetry, onBack }) {
  const stars = correct === total ? 3 : correct >= Math.ceil(total * 0.7) ? 2 : correct >= Math.ceil(total * 0.4) ? 1 : 0
  return (
    <div className="p-6 flex flex-col items-center gap-5 text-center">
      <div className="text-7xl mt-4">{stars === 3 ? '🏆' : stars === 2 ? '🌟' : '👍'}</div>
      <h2 className="text-3xl font-black">{stars === 3 ? '¡PERFECTO!' : stars >= 2 ? '¡Muy bien!' : '¡Sigue practicando!'}</h2>
      <div className="flex gap-1 text-4xl">{[1,2,3].map(i=><span key={i} className={i<=stars?'opacity-100':'opacity-20'}>⭐</span>)}</div>
      <div className="bg-white rounded-2xl p-4 shadow"><p className="text-5xl font-black">{correct}<span className="text-2xl text-gray-400"> / {total}</span></p><p className="text-gray-500 font-bold">correctas</p></div>
      <div className="flex gap-3">
        <button onClick={onRetry} className="bg-white border-2 border-gray-200 rounded-2xl px-6 py-3 font-black active:scale-95">🔄 Repetir</button>
        <button onClick={onBack}  className="bg-yellow-400 rounded-2xl px-6 py-3 font-black active:scale-95 shadow">✅ Terminar</button>
      </div>
    </div>
  )
}

export default function Resta({ onComplete, onBack, theme }) {
  const [current, setCurrent] = useState(0)
  const [score, setScore]     = useState(0)
  const [done, setDone]       = useState(false)

  const handleAnswer = (correct) => {
    const newScore = correct ? score + 1 : score
    if (correct) setScore(newScore)
    if (current + 1 >= EXERCISES.length) {
      setDone(true)
      onComplete(newScore, EXERCISES.length)
    } else {
      setCurrent(c => c + 1)
    }
  }

  if (done) return <ResultsPanel correct={score} total={EXERCISES.length} onRetry={()=>{setCurrent(0);setScore(0);setDone(false)}} onBack={onBack} />

  return (
    <RestaExercise
      key={current}
      exercise={EXERCISES[current]}
      onAnswer={handleAnswer}
      current={current}
      total={EXERCISES.length}
      score={score}
    />
  )
}
