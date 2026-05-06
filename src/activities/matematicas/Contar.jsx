import { useState } from 'react'
import QuizBase from '../../components/QuizBase.jsx'

function makeOptions(correct) {
  const opts = new Set([correct])
  while (opts.size < 4) {
    const n = Math.max(1, correct + Math.floor(Math.random() * 5) - 2)
    opts.add(n)
  }
  return [...opts].sort(() => Math.random() - 0.5).map(String)
}

const rawQuestions = [
  { count: 3,  emoji: '🍎' },
  { count: 7,  emoji: '⭐' },
  { count: 5,  emoji: '🐟' },
  { count: 10, emoji: '🌸' },
  { count: 2,  emoji: '🎈' },
  { count: 8,  emoji: '🦋' },
  { count: 6,  emoji: '🍕' },
  { count: 4,  emoji: '🐾' },
  { count: 9,  emoji: '⚽' },
  { count: 1,  emoji: '🌟' },
  { count: 12, emoji: '🍦' },
  { count: 15, emoji: '🐥' },
]

const questions = rawQuestions.map(({ count, emoji }) => ({
  image: emoji.repeat(count),
  question: `¿Cuántos ${emoji} hay?`,
  answer: String(count),
  options: makeOptions(count),
}))

export default function Contar({ onComplete, onBack, theme }) {
  return (
    <QuizBase
      questions={questions}
      onComplete={onComplete}
      onBack={onBack}
      theme={theme}
    />
  )
}
