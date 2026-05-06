import QuizBase from '../../components/QuizBase.jsx'

const questions = [
  { image: '🌳', word: 'ÁRBOL',      question: '¿Con qué vocal empieza ÁRBOL?',      answer: 'A', options: ['A', 'E', 'I', 'O'] },
  { image: '⭐', word: 'ESTRELLA',   question: '¿Con qué vocal empieza ESTRELLA?',   answer: 'E', options: ['A', 'E', 'I', 'U'] },
  { image: '🏝️', word: 'ISLA',       question: '¿Con qué vocal empieza ISLA?',       answer: 'I', options: ['A', 'E', 'I', 'O'] },
  { image: '🐻', word: 'OSO',        question: '¿Con qué vocal empieza OSO?',        answer: 'O', options: ['E', 'I', 'O', 'U'] },
  { image: '🍇', word: 'UVA',        question: '¿Con qué vocal empieza UVA?',        answer: 'U', options: ['A', 'I', 'O', 'U'] },
  { image: '✈️', word: 'AVIÓN',      question: '¿Con qué vocal empieza AVIÓN?',      answer: 'A', options: ['A', 'E', 'O', 'U'] },
  { image: '🐘', word: 'ELEFANTE',   question: '¿Con qué vocal empieza ELEFANTE?',   answer: 'E', options: ['A', 'E', 'I', 'U'] },
  { image: '🦔', word: 'ERIZO',      question: '¿Con qué vocal empieza ERIZO?',      answer: 'E', options: ['A', 'E', 'O', 'U'] },
  { image: '🐑', word: 'OVEJA',      question: '¿Con qué vocal empieza OVEJA?',      answer: 'O', options: ['A', 'I', 'O', 'U'] },
  { image: '🦄', word: 'UNICORNIO',  question: '¿Con qué vocal empieza UNICORNIO?',  answer: 'U', options: ['E', 'I', 'O', 'U'] },
  { image: '🐜', word: 'ABEJA',      question: '¿Con qué vocal empieza ABEJA?',      answer: 'A', options: ['A', 'E', 'I', 'O'] },
  { image: '🌿', word: 'ESPIGA',     question: '¿Con qué vocal empieza ESPIGA?',     answer: 'E', options: ['A', 'E', 'I', 'U'] },
]

export default function Vocales({ onComplete, onBack, theme }) {
  return (
    <QuizBase
      questions={questions}
      onComplete={onComplete}
      onBack={onBack}
      theme={theme}
    />
  )
}
