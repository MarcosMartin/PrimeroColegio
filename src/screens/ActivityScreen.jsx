export default function ActivityScreen({ subject, activity, onComplete, onBack }) {
  const Component = activity.component

  const gradientMap = {
    blue: 'from-blue-400 to-blue-600',
    orange: 'from-orange-400 to-orange-600',
    green: 'from-green-400 to-green-600',
  }
  const gradient = gradientMap[subject.theme]

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col">
      <div className={`bg-gradient-to-r ${gradient} px-4 py-3 text-white flex items-center gap-3`}>
        <button
          onClick={onBack}
          className="text-white/80 hover:text-white font-bold text-xl transition-colors shrink-0"
          aria-label="Volver"
        >
          ←
        </button>
        <span className="text-2xl">{activity.icon}</span>
        <h1 className="font-black text-lg leading-tight flex-1">{activity.name}</h1>
        <span className="text-2xl">{subject.icon}</span>
      </div>

      <div className="flex-1">
        <Component onComplete={onComplete} onBack={onBack} theme={subject.theme} />
      </div>
    </div>
  )
}
