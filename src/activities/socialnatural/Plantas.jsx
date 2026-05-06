import QuizBase from '../../components/QuizBase.jsx'

const questions = [
  { image: '🌱', question: '¿Qué parte de la planta absorbe el agua de la tierra?',       answer: 'La raíz',   options: ['El tallo', 'La hoja', 'La flor', 'La raíz'] },
  { image: '🪴', question: '¿Qué parte de la planta sostiene y transporta el agua?',       answer: 'El tallo',  options: ['La raíz', 'El tallo', 'La hoja', 'El fruto'] },
  { image: '🍃', question: '¿Qué parte de la planta fabrica el alimento con el sol?',      answer: 'Las hojas', options: ['Las hojas', 'La raíz', 'El tallo', 'La flor'] },
  { image: '🌸', question: '¿Qué parte de la planta atrae a los insectos?',                answer: 'La flor',   options: ['La raíz', 'Las hojas', 'El fruto', 'La flor'] },
  { image: '🍎', question: '¿Qué parte de la planta contiene las semillas?',               answer: 'El fruto',  options: ['La hoja', 'La flor', 'El fruto', 'El tallo'] },
  { image: '🌳', question: '¿Para qué nos sirven los árboles? (elige la mejor respuesta)', answer: 'Dan oxígeno y sombra', options: ['Solo dan frutos', 'Dan oxígeno y sombra', 'Solo dan madera', 'No sirven para nada'] },
  { image: '🌾', question: '¿De qué planta viene el pan y la pasta?',                      answer: 'Del trigo',  options: ['Del arroz', 'Del trigo', 'De la patata', 'Del maíz'] },
  { image: '🍊', question: '¿Qué parte de la naranja comemos?',                            answer: 'El fruto',  options: ['La raíz', 'Las hojas', 'El fruto', 'El tallo'] },
  { image: '🫘', question: '¿Cómo se llama el primer paso en el ciclo de la planta?',      answer: 'La semilla', options: ['La flor', 'La semilla', 'La plántula', 'El fruto'] },
  { image: '💧', question: '¿Qué necesita una semilla para germinar?',                     answer: 'Agua, tierra y calor', options: ['Solo luz', 'Solo agua', 'Agua, tierra y calor', 'Solo tierra'] },
  { image: '🌵', question: '¿Cómo se llama la planta del desierto que tiene espinas y guarda agua?', answer: 'Cactus', options: ['Rosa', 'Cactus', 'Helecho', 'Roble'] },
  { image: '🌻', question: '¿Cómo se llama la flor que siempre mira al sol?',              answer: 'Girasol',   options: ['Tulipán', 'Rosa', 'Margarita', 'Girasol'] },
  { image: '♻️', question: '¿Qué hacemos para cuidar los árboles?',                       answer: 'No cortarlos y plantar nuevos', options: ['Quemarlos', 'No cortarlos y plantar nuevos', 'Pisarlos', 'Nada'] },
  { image: '🌿', question: '¿Las plantas producen el oxígeno que respiramos. ¿Eso es bueno?', answer: 'Sí, son muy importantes', options: ['No importa', 'Sí, son muy importantes', 'Solo a veces', 'Solo en verano'] },
]

export default function Plantas({ onComplete, onBack, theme }) {
  return (
    <QuizBase
      questions={questions}
      onComplete={onComplete}
      onBack={onBack}
      theme={theme}
    />
  )
}
