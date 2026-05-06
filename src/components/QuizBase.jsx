import { useState, useEffect } from 'react'
import { speak } from '../utils/speech.js'

const THEMES = {
  blue:   { bar: 'bg-blue-500',   optHover: 'hover:bg-blue-50 hover:border-blue-400' },
  orange: { bar: 'bg-orange-500', optHover: 'hover:bg-orange-50 hover:border-orange-400' },
  green:  { bar: 'bg-green-500',  optHover: 'hover:bg-green-50 hover:border-green-400' },
}

const PRAISE = [
  '¡Muy bien!', '¡Genial!', '¡Correcto!',
  '¡Estupendo!', '¡Perfecto!', '¡Fantástico!',
]

function ResultsPanel({ correct, total, onRetry, onBack }) {
  const stars = correct === total ? 3 : correct >= Math.ceil(total * 0.7) ? 2 : correct >= Math.ceil(total * 0.4) ? 1 : 0
  const pct = Math.round((correct / total) * 100)
  const messages = [
    { min: 100, text: '¡PERFECTO! ¡Eres increíble! 🏆' },
    { min: 70,  text: '¡Muy bien hecho! 🌟' },
    { min: 40,  text: '¡Buen intento! Sigue practicando 💪' },
    { min: 0,   text: '¡Vamos a practicar más! 📚' },
  ]
  const msg = messages.find(m => pct >= m.min).text

  useEffect(() => {
    const plainMsg = msg.replace(/[^\w\s¡!¿?áéíóúüñÁÉÍÓÚÜÑ]/g, '').trim()
    speak(plainMsg)
  }, [])

  return (
    <div className="p-6 flex flex-col items-center gap-5 text-center animate-pop-in">
      <div className="text-7xl mt-4">{stars === 3 ? '🏆' : stars === 2 ? '🌟' : stars === 1 ? '👍' : '📚'}</div>
      <h2 className="text-3xl font-black text-gray-800">{msg}</h2>
      <div className="flex gap-1 text-4xl">
        {[1, 2, 3].map(i => (
          <span key={i} className={`transition-all ${i <= stars ? 'opacity-100 scale-110' : 'opacity-20'}`}>⭐</span>
        ))}
      </div>
      <div className="bg-white rounded-2xl p-4 shadow w-full max-w-xs">
        <p className="text-5xl font-black text-gray-800">{correct}<span className="text-2xl text-gray-400"> / {total}</span></p>
        <p className="text-gray-500 font-bold">respuestas correctas</p>
      </div>
      <div className="flex gap-3 w-full max-w-xs">
        <button
          onClick={onRetry}
          className="flex-1 bg-white border-2 border-gray-200 rounded-2xl py-3 font-black text-gray-700 hover:bg-gray-50 active:scale-95 transition-all"
        >
          🔄 Repetir
        </button>
        <button
          onClick={onBack}
          className="flex-1 bg-yellow-400 rounded-2xl py-3 font-black text-yellow-900 hover:bg-yellow-500 active:scale-95 transition-all shadow"
        >
          ✅ Terminar
        </button>
      </div>
    </div>
  )
}

export default function QuizBase({ questions, onComplete, onBack, theme = 'blue', renderQuestion }) {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [feedback, setFeedback] = useState(null)
  const [done, setDone] = useState(false)
  const [praiseIdx] = useState(Math.floor(Math.random() * PRAISE.length))

  const t = THEMES[theme] || THEMES.blue
  const q = questions[current]
  const progress = ((current) / questions.length) * 100

  // Speak the question text when the current question changes
  useEffect(() => {
    const timer = setTimeout(() => {
      speak(q.question)
    }, 400)
    return () => clearTimeout(timer)
  }, [current])

  const handleSelect = (option) => {
    if (selected !== null || done) return
    const correct = option === q.answer
    const newScore = correct ? score + 1 : score
    setSelected(option)
    setFeedback(correct ? 'correct' : 'incorrect')
    if (correct) setScore(newScore)

    // Speak feedback
    if (correct) {
      speak(PRAISE[praiseIdx])
    } else {
      speak(`La respuesta correcta es ${q.answer}`)
    }

    setTimeout(() => {
      if (current + 1 >= questions.length) {
        setDone(true)
        onComplete(newScore, questions.length)
      } else {
        setCurrent(c => c + 1)
        setSelected(null)
        setFeedback(null)
      }
    }, 1500)
  }

  const handleRetry = () => {
    setCurrent(0)
    setScore(0)
    setSelected(null)
    setFeedback(null)
    setDone(false)
  }

  if (done) {
    return <ResultsPanel correct={score} total={questions.length} onRetry={handleRetry} onBack={onBack} />
  }

  return (
    <div className="p-4 flex flex-col gap-4 max-w-lg mx-auto">
      {/* Progress */}
      <div className="flex justify-between items-center text-sm text-gray-500 font-bold">
        <span>Pregunta {current + 1} de {questions.length}</span>
        <span className="flex items-center gap-1">{score} <span className="text-base">⭐</span></span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${t.bar} rounded-full transition-all duration-500`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question card */}
      <div
        className={`bg-white rounded-2xl p-5 shadow-md text-center border-4 transition-all duration-200 ${
          feedback === 'correct'   ? 'border-green-400 bg-green-50'  :
          feedback === 'incorrect' ? 'border-red-400 bg-red-50'      :
          'border-transparent'
        }`}
      >
        {q.image && <div className="text-7xl mb-3 leading-none">{q.image}</div>}
        {q.word  && <div className="text-4xl font-black text-gray-800 mb-2 tracking-widest">{q.word}</div>}
        <div className="flex items-center justify-center gap-2">
          <p className="text-xl font-black text-gray-700 leading-snug">{q.question}</p>
          <button
            onClick={() => speak(q.question)}
            className="text-2xl hover:scale-110 active:scale-95 transition-all"
            title="Escuchar pregunta"
            aria-label="Repetir pregunta"
          >
            🔊
          </button>
        </div>

        {feedback && (
          <div className={`mt-3 text-xl font-black ${feedback === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
            {feedback === 'correct' ? `${PRAISE[praiseIdx]} 🎉` : `❌ Respuesta: ${q.answer}`}
          </div>
        )}
      </div>

      {/* Options */}
      <div className={`grid gap-3 ${q.options.length <= 2 ? 'grid-cols-2' : q.options.length === 4 ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {q.options.map((option) => {
          const isSelected = selected === option
          const isCorrect  = option === q.answer
          const showResult = selected !== null

          let cls = `rounded-2xl p-3 text-xl font-black border-4 transition-all active:scale-95 ${
            !showResult
              ? `bg-white border-gray-200 ${t.optHover}`
              : isCorrect
              ? 'bg-green-100 border-green-500 text-green-800'
              : isSelected
              ? 'bg-red-100 border-red-500 text-red-700'
              : 'bg-gray-100 border-gray-200 text-gray-400 opacity-60'
          }`

          return (
            <button key={option} onClick={() => handleSelect(option)} disabled={showResult} className={cls}>
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}
