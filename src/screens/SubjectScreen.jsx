function StarDisplay({ count }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3].map(i => (
        <span key={i} className={`text-lg ${i <= count ? 'opacity-100' : 'opacity-20'}`}>⭐</span>
      ))}
    </div>
  )
}

export default function SubjectScreen({ subject, progress, onActivitySelect, onBack }) {
  const gradientMap = {
    blue: 'from-blue-400 to-blue-600',
    orange: 'from-orange-400 to-orange-600',
    green: 'from-green-400 to-green-600',
  }
  const gradient = gradientMap[subject.theme]

  const totalStars = subject.activities.reduce((acc, act) => {
    return acc + (progress[`${subject.id}__${act.id}`] || 0)
  }, 0)
  const maxStars = subject.activities.length * 3

  return (
    <div className="min-h-screen bg-yellow-50">
      <div className={`bg-gradient-to-br ${gradient} p-6 pt-8 pb-10 text-white`}>
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white/80 hover:text-white font-bold text-lg mb-4 transition-colors"
        >
          ← Inicio
        </button>
        <div className="text-center">
          <span className="text-6xl drop-shadow">{subject.icon}</span>
          <h1 className="text-3xl font-black mt-2">{subject.name}</h1>
          <p className="text-white/80 font-semibold mt-1">{subject.description}</p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="text-white/90 font-bold">{totalStars} / {maxStars} ⭐</span>
          </div>
        </div>
      </div>

      <div className="p-4 max-w-md mx-auto">
        <h2 className="text-gray-600 font-black text-lg mb-3 mt-2">Elige una actividad:</h2>
        <div className="flex flex-col gap-3">
          {subject.activities.map((activity, idx) => {
            const stars = progress[`${subject.id}__${activity.id}`] || 0
            const done = stars > 0
            return (
              <button
                key={activity.id}
                onClick={() => onActivitySelect(activity.id)}
                className={`bg-white rounded-2xl p-4 shadow flex items-center gap-4
                  border-2 transition-all active:scale-95 hover:shadow-md
                  ${done ? 'border-yellow-300' : 'border-gray-100'}`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl shrink-0
                    ${done ? 'bg-yellow-100' : 'bg-gray-100'}`}
                >
                  {activity.icon}
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 font-bold text-sm">{idx + 1}.</span>
                    <span className="text-gray-800 font-black text-lg leading-tight">{activity.name}</span>
                  </div>
                  <StarDisplay count={stars} />
                </div>
                <span className="text-gray-300 text-xl">›</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
