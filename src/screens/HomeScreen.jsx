import { SUBJECTS } from '../subjects.js'

const greetings = [
  '¡Hola, campeón! 🏆',
  '¡Hola, estrella! ⭐',
  '¡Bienvenido de vuelta! 🎉',
  '¡A aprender hoy! 🚀',
  '¡Qué bien que has venido! 🌟',
]

function StarBar({ filled, total }) {
  return (
    <div className="flex items-center gap-1 flex-wrap justify-center">
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} className={`text-lg transition-all ${i < filled ? 'opacity-100' : 'opacity-20'}`}>
          ⭐
        </span>
      ))}
    </div>
  )
}

function SubjectCard({ subject, onSelect, starsEarned, totalStars }) {
  const gradientMap = {
    blue: 'from-blue-400 to-blue-600',
    orange: 'from-orange-400 to-orange-600',
    green: 'from-green-400 to-green-600',
  }
  const gradient = gradientMap[subject.theme] || gradientMap.blue
  const pct = totalStars > 0 ? Math.round((starsEarned / totalStars) * 100) : 0

  return (
    <button
      onClick={() => onSelect(subject.id)}
      className={`w-full bg-gradient-to-br ${gradient} text-white rounded-3xl p-6 shadow-lg
        flex flex-col items-center gap-3 transition-transform active:scale-95
        hover:shadow-xl hover:-translate-y-1`}
    >
      <span className="text-6xl drop-shadow">{subject.icon}</span>
      <h2 className="text-2xl font-black tracking-wide">{subject.name}</h2>
      <p className="text-white/80 text-sm font-semibold">{subject.description}</p>
      <div className="w-full bg-white/20 rounded-full h-3 mt-1">
        <div
          className="bg-white rounded-full h-3 transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-white/90 text-sm font-bold">{starsEarned} / {totalStars} ⭐</span>
    </button>
  )
}

export default function HomeScreen({ onSubjectSelect, progress, totalStars, maxStars }) {
  const greeting = greetings[new Date().getDay() % greetings.length]

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-50 p-4 pb-8">
      <header className="text-center py-6">
        <div className="text-5xl mb-2">🌟</div>
        <h1 className="text-4xl font-black text-yellow-700 tracking-tight">¡A Aprender!</h1>
        <p className="text-yellow-600 font-bold text-lg mt-1">1º de Primaria</p>
        <p className="text-gray-500 font-semibold mt-3">{greeting}</p>
      </header>

      {maxStars > 0 && (
        <div className="bg-white rounded-2xl p-4 shadow mb-6 text-center">
          <p className="text-gray-600 font-bold mb-2">Tu progreso total</p>
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="text-4xl font-black text-yellow-500">{totalStars}</span>
            <span className="text-gray-400 text-xl font-bold">/ {maxStars}</span>
            <span className="text-2xl">⭐</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full h-4 transition-all duration-700"
              style={{ width: `${maxStars > 0 ? (totalStars / maxStars) * 100 : 0}%` }}
            />
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 max-w-md mx-auto">
        {Object.values(SUBJECTS).map(subject => {
          const starsEarned = subject.activities.reduce((acc, act) => {
            return acc + (progress[`${subject.id}__${act.id}`] || 0)
          }, 0)
          const totalActivityStars = subject.activities.length * 3
          return (
            <SubjectCard
              key={subject.id}
              subject={subject}
              onSelect={onSubjectSelect}
              starsEarned={starsEarned}
              totalStars={totalActivityStars}
            />
          )
        })}
      </div>

      <p className="text-center text-gray-400 text-xs mt-8">
        Hecho con ❤️ para aprender jugando
      </p>
    </div>
  )
}
