import { useState, useEffect } from 'react'
import { speak } from '../../utils/speech.js'

const EXERCISES = [
  { a: 9,   b: 4,  emoji: '🍎' },
  { a: 15,  b: 7,  emoji: '⭐' },
  { a: 12,  b: 5,  emoji: '🐟' },
  { a: 20,  b: 8,  emoji: '🎈' },
  { a: 30,  b: 14, emoji: '🌸' },
  { a: 45,  b: 23, emoji: '🍕' },
  { a: 57,  b: 34, emoji: '🦋' },
  { a: 70,  b: 42, emoji: '🏀' },
  { a: 80,  b: 35, emoji: '⚽' },
  { a: 90,  b: 47, emoji: '🍦' },
  { a: 100, b: 38, emoji: '🌟' },
  { a: 85,  b: 29, emoji: '🐥' },
]

function makeOptions(correct) {
  const opts = new Set([correct])
  const deltas = [-3, -2, -1, 1, 2, 3, 4, 5, -4, -5]
  let di = 0
  while (opts.size < 4 && di < deltas.length) {
    const n = Math.max(0, correct + deltas[di])
    opts.add(n)
    di++
  }
  let extra = correct + 6
  while (opts.size < 4) {
    opts.add(extra++)
  }
  return [...opts].sort(() => Math.random() - 0.5).map(String)
}

function RestaExercise({ exercise, onAnswer, current, total, score }) {
  const { a, b, emoji } = exercise
  const answer = a - b
  const [options] = useState(() => makeOptions(answer))
  const [selected, setSelected] = useState(null)
  const [feedback, setFeedback] = useState(null)

  // Speak the question when exercise loads
  useEffect(() => {
    const timer = setTimeout(() => {
      speak(`¿Cuánto es ${a} menos ${b}?`)
    }, 400)
    return () => clearTimeout(timer)
  }, [a, b])

  const handle = (opt) => {
    if (selected) return
    const correct = opt === String(answer)
    setSelected(opt)
    setFeedback(correct ? 'correct' : 'incorrect')

    setTimeout(() => {
      if (correct) {
        speak('¡Muy bien!')
      } else {
        speak(`La respuesta correcta es ${answer}`)
      }
    }, 100)

    setTimeout(() => onAnswer(correct), 1500)
  }

  // Render crossed-out emojis for the removed items (only when a<=15)
  const renderEmojis = () => {
    const items = []
    for (let i = 0; i < a; i++) {
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

        <div className="flex items-center justify-center gap-2">
          <div className="text-3xl font-black text-gray-800">
            {a} − {b} = <span className="text-orange-500">?</span>
          </div>
          <button
            onClick={() => speak(`¿Cuánto es ${a} menos ${b}?`)}
            className="text-2xl hover:scale-110 active:scale-95 transition-all"
            title="Escuchar pregunta"
            aria-label="Repetir pregunta"
          >
            🔊
          </button>
        </div>

        {a <= 15 && (
          <p className="text-gray-400 font-semibold text-sm mt-1">
            Tenemos {a} y quitamos {b}
          </p>
        )}

        {feedback && (
          <p className={`text-xl font-black mt-2 ${feedback === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
            {feedback === 'correct' ? '¡Muy bien! 🎉' : `❌ Era: ${answer}`}
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

  useEffect(() => {
    const msg = stars === 3 ? '¡PERFECTO!' : stars >= 2 ? '¡Muy bien!' : '¡Sigue practicando!'
    speak(msg)
  }, [])

  return (
    <div className="p-6 flex flex-col items-center gap-5 text-center">
      <div className="text-7xl mt-4">{stars === 3 ? '🏆' : stars === 2 ? '🌟' : '👍'}</div>
      <h2 className="text-3xl font-black">{stars === 3 ? '¡PERFECTO!' : stars >= 2 ? '¡Muy bien!' : '¡Sigue practicando!'}</h2>
      <div className="flex gap-1 text-4xl">{[1,2,3].map(i=><span key={i} className={i<=stars?'opacity-100':'opacity-20'}>⭐</span>)}</div>
      <div className="bg-white rounded-2xl p-4 shadow">
        <p className="text-5xl font-black">{correct}<span className="text-2xl text-gray-400"> / {total}</span></p>
        <p className="text-gray-500 font-bold">correctas</p>
      </div>
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
