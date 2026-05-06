import { useState } from 'react'
import QuizBase from '../../components/QuizBase.jsx'

function makeOptions(correct) {
  const opts = new Set([correct])
  let delta = 1
  while (opts.size < 4) {
    opts.add(correct + delta)
    if (opts.size < 4) opts.add(Math.max(1, correct - delta))
    delta++
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
