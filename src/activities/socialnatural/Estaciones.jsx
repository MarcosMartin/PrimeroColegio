import QuizBase from '../../components/QuizBase.jsx'

const questions = [
  // Season identification
  { image: '🌸🌷🐝', question: 'Salen las flores, hace calor moderado y llueve a veces. ¿Qué estación es?',       answer: 'Primavera', options: ['Verano', 'Otoño', 'Invierno', 'Primavera'] },
  { image: '☀️🏖️🍦', question: 'Hace mucho calor, los días son largos y vamos a la playa. ¿Qué estación es?',   answer: 'Verano',    options: ['Primavera', 'Verano', 'Otoño', 'Invierno'] },
  { image: '🍂🍁🌰', question: 'Las hojas caen, empieza el frío y hay castañas. ¿Qué estación es?',               answer: 'Otoño',     options: ['Primavera', 'Verano', 'Otoño', 'Invierno'] },
  { image: '❄️⛄🧣', question: 'Hace mucho frío, a veces nieva y los días son cortos. ¿Qué estación es?',        answer: 'Invierno',  options: ['Primavera', 'Verano', 'Otoño', 'Invierno'] },
  // Season order
  { image: '📅', question: 'Después de invierno, ¿qué estación viene?',     answer: 'Primavera', options: ['Otoño', 'Verano', 'Primavera', 'Invierno'] },
  { image: '📅', question: 'Después de primavera, ¿qué estación viene?',    answer: 'Verano',    options: ['Otoño', 'Verano', 'Invierno', 'Primavera'] },
  // Weather
  { image: '🌨️', question: '¿En qué estación puede nevar?',                 answer: 'Invierno',  options: ['Verano', 'Primavera', 'Otoño', 'Invierno'] },
  { image: '🌺', question: '¿En qué estación florecen la mayoría de las plantas?', answer: 'Primavera', options: ['Verano', 'Otoño', 'Invierno', 'Primavera'] },
  // Clothing
  { image: '🧥🧤🧦', question: '¿En qué estación nos ponemos abrigo, guantes y bufanda?', answer: 'Invierno', options: ['Verano', 'Otoño', 'Primavera', 'Invierno'] },
  { image: '👙🩳🕶️', question: '¿En qué estación nos ponemos bañador y gafas de sol?',   answer: 'Verano',   options: ['Invierno', 'Otoño', 'Verano', 'Primavera'] },
  // Days of week and calendar
  { image: '📆', question: '¿Cuántos días tiene una semana?',                answer: '7',  options: ['5', '6', '7', '10'] },
  { image: '📆', question: 'Si hoy es lunes, ¿qué día es mañana?',          answer: 'Martes', options: ['Domingo', 'Martes', 'Miércoles', 'Viernes'] },
  { image: '📆', question: '¿Cuántos meses tiene un año?',                  answer: '12', options: ['10', '11', '12', '13'] },
  { image: '🕐', question: '¿Cuántas horas tiene un día?',                  answer: '24', options: ['10', '12', '24', '30'] },
  // Social environment
  { image: '👪', question: '¿Cómo se llama la persona que es el hijo o hija de tu tío?', answer: 'Tu primo o prima', options: ['Tu hermano', 'Tu sobrino', 'Tu primo o prima', 'Tu abuelo'] },
  { image: '🏫', question: '¿Dónde van los niños a aprender durante el día?', answer: 'Al colegio', options: ['Al hospital', 'Al mercado', 'Al colegio', 'Al parque'] },
]

export default function Estaciones({ onComplete, onBack, theme }) {
  return (
    <QuizBase
      questions={questions}
      onComplete={onComplete}
      onBack={onBack}
      theme={theme}
    />
  )
}
