import { useState, useEffect } from 'react'
import { speak } from '../../utils/speech.js'

// Each question: show an image + answer word, syllables are displayed shuffled,
// player taps syllables in order to build the word.
const EXERCISES = [
  { image: '🌙', word: 'LUNA',      syllables: ['LU', 'NA'],         definition: 'Aparece de noche en el cielo' },
  { image: '🪑', word: 'MESA',      syllables: ['ME', 'SA'],         definition: 'Mueble donde comemos' },
  { image: '🐱', word: 'GATO',      syllables: ['GA', 'TO'],         definition: 'Animal doméstico que maúlla' },
  { image: '🐶', word: 'PERRO',     syllables: ['PE', 'RRO'],        definition: 'Mejor amigo del hombre' },
  { image: '🌸', word: 'FLOR',      syllables: ['FLOR'],             definition: 'Parte bonita de la planta' },
  { image: '🏠', word: 'CASA',      syllables: ['CA', 'SA'],         definition: 'Lugar donde vivimos' },
  { image: '🍞', word: 'PAN',       syllables: ['PAN'],              definition: 'Alimento hecho con harina' },
  { image: '🎈', word: 'GLOBO',     syllables: ['GLO', 'BO'],        definition: 'Se hincha con aire o helio' },
  { image: '🦋', word: 'MARIPOSA',  syllables: ['MA', 'RI', 'PO', 'SA'], definition: 'Insecto con alas de colores' },
  { image: '🕊️', word: 'PALOMA',   syllables: ['PA', 'LO', 'MA'],   definition: 'Ave blanca símbolo de la paz' },
]

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5)
}

function SilabasExercise({ exercise, onNext, isLast, score, total }) {
  const [chosen, setChosen] = useState([])
  const [available, setAvailable] = useState(() => shuffle(exercise.syllables))
  const [feedback, setFeedback] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => speak(exercise.definition), 400)
    return () => clearTimeout(timer)
  }, [exercise])

  const handlePick = (syl, idx) => {
    if (feedback) return
    const newChosen = [...chosen, syl]
    const newAvailable = available.filter((_, i) => i !== idx)
    setChosen(newChosen)
    setAvailable(newAvailable)

    if (newChosen.length === exercise.syllables.length) {
      const correct = newChosen.join('') === exercise.word
      setFeedback(correct ? 'correct' : 'incorrect')
      setTimeout(() => {
        speak(correct ? '¡Correcto!' : `Era: ${exercise.word}`)
      }, 100)
      setTimeout(() => onNext(correct), 1600)
    }
  }

  const handleReset = () => {
    setChosen([])
    setAvailable(shuffle(exercise.syllables))
    setFeedback(null)
  }

  return (
    <div className="p-4 flex flex-col gap-4 max-w-lg mx-auto">
      <div className="flex justify-between items-center text-sm text-gray-500 font-bold">
        <span>Pregunta {total - (total - score) + 1} de {total}</span>
        <span>{score} ⭐</span>
      </div>

      {/* Word display */}
      <div
        className={`bg-white rounded-2xl p-5 shadow-md text-center border-4 transition-all ${
          feedback === 'correct'   ? 'border-green-400 bg-green-50'  :
          feedback === 'incorrect' ? 'border-red-400 bg-red-50'      :
          'border-transparent'
        }`}
      >
        <div className="text-7xl mb-2">{exercise.image}</div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-gray-500 font-semibold text-base">{exercise.definition}</p>
          <button onClick={() => speak(exercise.definition)} className="text-xl hover:scale-110 active:scale-95 transition-all" title="Escuchar pista" aria-label="Repetir pista">🔊</button>
        </div>
        {feedback && (
          <p className={`text-xl font-black mt-2 ${feedback === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
            {feedback === 'correct' ? '¡Correcto! 🎉' : `❌ Era: ${exercise.word}`}
          </p>
        )}
      </div>

      {/* Chosen syllables */}
      <div className="min-h-16 bg-white rounded-2xl border-4 border-dashed border-blue-200 flex items-center justify-center gap-2 p-3">
        {chosen.length === 0
          ? <span className="text-gray-400 font-bold">Toca las sílabas en orden...</span>
          : chosen.map((s, i) => (
              <span key={i} className="bg-blue-100 text-blue-800 text-2xl font-black px-3 py-1 rounded-xl border-2 border-blue-300">
                {s}
              </span>
            ))
        }
      </div>

      {/* Available syllables */}
      <div className="flex gap-3 flex-wrap justify-center">
        {available.map((syl, idx) => (
          <button
            key={`${syl}-${idx}`}
            onClick={() => handlePick(syl, idx)}
            disabled={!!feedback}
            className="bg-white border-4 border-blue-400 text-blue-700 text-2xl font-black px-5 py-3 rounded-2xl
              hover:bg-blue-50 active:scale-95 transition-all shadow disabled:opacity-50"
          >
            {syl}
          </button>
        ))}
      </div>

      {!feedback && chosen.length > 0 && (
        <button
          onClick={handleReset}
          className="text-gray-400 font-bold text-sm text-center hover:text-gray-600 transition-colors"
        >
          🔄 Borrar y empezar de nuevo
        </button>
      )}
    </div>
  )
}

function ResultsPanel({ correct, total, onRetry, onBack }) {
  const stars = correct === total ? 3 : correct >= Math.ceil(total * 0.7) ? 2 : correct >= Math.ceil(total * 0.4) ? 1 : 0

  useEffect(() => {
    speak(stars === 3 ? '¡PERFECTO!' : stars >= 2 ? '¡Muy bien!' : '¡Sigue practicando!')
  }, [])

  return (
    <div className="p-6 flex flex-col items-center gap-5 text-center">
      <div className="text-7xl mt-4">{stars === 3 ? '🏆' : stars === 2 ? '🌟' : '👍'}</div>
      <h2 className="text-3xl font-black text-gray-800">
        {stars === 3 ? '¡PERFECTO!' : stars >= 2 ? '¡Muy bien!' : '¡Sigue practicando!'}
      </h2>
      <div className="flex gap-1 text-4xl">
        {[1,2,3].map(i => <span key={i} className={i <= stars ? 'opacity-100' : 'opacity-20'}>⭐</span>)}
      </div>
      <div className="bg-white rounded-2xl p-4 shadow">
        <p className="text-5xl font-black">{correct}<span className="text-2xl text-gray-400"> / {total}</span></p>
        <p className="text-gray-500 font-bold">palabras correctas</p>
      </div>
      <div className="flex gap-3">
        <button onClick={onRetry} className="bg-white border-2 border-gray-200 rounded-2xl px-6 py-3 font-black text-gray-700 active:scale-95">🔄 Repetir</button>
        <button onClick={onBack}  className="bg-yellow-400 rounded-2xl px-6 py-3 font-black text-yellow-900 active:scale-95 shadow">✅ Terminar</button>
      </div>
    </div>
  )
}

export default function Silabas({ onComplete, onBack, theme }) {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const handleNext = (correct) => {
    const newScore = correct ? score + 1 : score
    if (correct) setScore(newScore)
    if (current + 1 >= EXERCISES.length) {
      setDone(true)
      onComplete(newScore, EXERCISES.length)
    } else {
      setCurrent(c => c + 1)
    }
  }

  if (done) {
    return <ResultsPanel correct={score} total={EXERCISES.length} onRetry={() => { setCurrent(0); setScore(0); setDone(false) }} onBack={onBack} />
  }

  return (
    <SilabasExercise
      key={current}
      exercise={EXERCISES[current]}
      onNext={handleNext}
      isLast={current + 1 >= EXERCISES.length}
      score={score}
      total={EXERCISES.length}
    />
  )
}
