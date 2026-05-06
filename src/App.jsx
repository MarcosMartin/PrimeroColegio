import { useState, useEffect } from 'react'
import HomeScreen from './screens/HomeScreen.jsx'
import SubjectScreen from './screens/SubjectScreen.jsx'
import ActivityScreen from './screens/ActivityScreen.jsx'
import { SUBJECTS } from './subjects.js'

function App() {
  const [view, setView] = useState('home')
  const [currentSubjectId, setCurrentSubjectId] = useState(null)
  const [currentActivityId, setCurrentActivityId] = useState(null)
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem('primeroColegio_v1')
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem('primeroColegio_v1', JSON.stringify(progress))
  }, [progress])

  const handleSubjectSelect = (subjectId) => {
    setCurrentSubjectId(subjectId)
    setView('subject')
  }

  const handleActivitySelect = (activityId) => {
    setCurrentActivityId(activityId)
    setView('activity')
  }

  const handleActivityComplete = (correct, total) => {
    const stars = correct === total ? 3 : correct >= Math.ceil(total * 0.7) ? 2 : correct >= Math.ceil(total * 0.4) ? 1 : 0
    const key = `${currentSubjectId}__${currentActivityId}`
    setProgress(prev => ({
      ...prev,
      [key]: Math.max(prev[key] || 0, stars),
    }))
    setView('subject')
  }

  const totalStars = Object.values(progress).reduce((a, b) => a + b, 0)
  const maxStars = Object.values(SUBJECTS).reduce((a, s) => a + s.activities.length * 3, 0)

  if (view === 'home') {
    return (
      <HomeScreen
        onSubjectSelect={handleSubjectSelect}
        progress={progress}
        totalStars={totalStars}
        maxStars={maxStars}
      />
    )
  }

  if (view === 'subject') {
    const subject = SUBJECTS[currentSubjectId]
    return (
      <SubjectScreen
        subject={subject}
        progress={progress}
        onActivitySelect={handleActivitySelect}
        onBack={() => setView('home')}
      />
    )
  }

  if (view === 'activity') {
    const subject = SUBJECTS[currentSubjectId]
    const activity = subject.activities.find(a => a.id === currentActivityId)
    return (
      <ActivityScreen
        subject={subject}
        activity={activity}
        onComplete={handleActivityComplete}
        onBack={() => setView('subject')}
      />
    )
  }

  return null
}

export default App
