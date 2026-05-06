import { useState } from 'react'
import QuizBase from '../../components/QuizBase.jsx'

// Map emoji to spoken Spanish name for TTS
const EMOJI_NAMES = {
  '🍎': 'manzanas',
  '⭐': 'estrellas',
  '🐟': 'peces',
  '🌸': 'flores',
  '🎈': 'globos',
  '🦋': 'mariposas',
  '🍕': 'pizzas',
  '🐾': 'huellas',
  '⚽': 'pelotas',
  '🌟': 'estrellas',
  '🍦': 'helados',
  '🐥': 'pollitos',
}

function makeOptions(correct) {
  const opts = new Set([correct])
  const deltas = [-3, -2, -1, 1, 2, 3, 4, 5, -4, -5]
  let di = 0
  while (opts.size < 4 && di < deltas.length) {
    const n = correct + deltas[di]
    if (n >= 1) opts.add(n)
    di++
  }
  // fallback: keep adding higher numbers if still not enough
  let extra = correct + 6
  while (opts.size < 4) {
    opts.add(extra++)
  }
  return [...opts].sort(() => Math.random() - 0.5).map(String)
}

function EmojiGrid({ emoji, count }) {
  const rows = []
  let remaining = count
  let start = 0
  while (remaining > 0) {
    const rowCount = Math.min(10, remaining)
    rows.push(
      <div key={start} className="flex flex-wrap justify-center gap-0.5">
        {Array.from({ length: rowCount }, (_, i) => (
          <span key={start + i} className="text-2xl leading-tight">{emoji}</span>
        ))}
      </div>
    )
    remaining -= rowCount
    start += rowCount
  }
  return (
    <div className="flex flex-col gap-1 items-center bg-blue-50 border-2 border-blue-100 rounded-xl p-2 mb-2">
      {rows}
    </div>
  )
}

const rawQuestions = [
  { count: 4,  emoji: '🍎' },
  { count: 7,  emoji: '⭐' },
  { count: 5,  emoji: '🐟' },
  { count: 10, emoji: '🌸' },
  { count: 3,  emoji: '🎈' },
  { count: 8,  emoji: '🦋' },
  { count: 12, emoji: '🍕' },
  { count: 15, emoji: '🐾' },
  { count: 20, emoji: '⚽' },
  { count: 18, emoji: '🌟' },
  { count: 25, emoji: '🍦' },
  { count: 30, emoji: '🐥' },
]

const questions = rawQuestions.map(({ count, emoji }) => {
  const name = EMOJI_NAMES[emoji] || 'objetos'
  return {
    image: <EmojiGrid emoji={emoji} count={count} />,
    question: `¿Cuántos ${name} hay?`,
    answer: String(count),
    options: makeOptions(count),
  }
})

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
