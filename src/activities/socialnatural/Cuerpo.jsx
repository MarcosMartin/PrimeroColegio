import QuizBase from '../../components/QuizBase.jsx'

const questions = [
  // Body parts identification
  { image: '👀', question: '¿Con qué vemos?',                    answer: 'Los ojos',   options: ['Los oídos', 'La nariz', 'Los ojos', 'La boca'] },
  { image: '👂', question: '¿Con qué oímos?',                   answer: 'Las orejas', options: ['Los ojos', 'Las orejas', 'La nariz', 'La boca'] },
  { image: '👃', question: '¿Con qué olemos?',                  answer: 'La nariz',   options: ['La boca', 'La nariz', 'Los ojos', 'Las orejas'] },
  { image: '👅', question: '¿Con qué saboreamos los alimentos?', answer: 'La lengua',  options: ['Los dientes', 'La lengua', 'Los labios', 'La nariz'] },
  { image: '🤚', question: '¿Con qué sentimos el frío y el calor?', answer: 'La piel',options: ['Los ojos', 'La nariz', 'La piel', 'La boca'] },
  // Senses
  { image: '🌹', question: 'Huelo una rosa. ¿Qué sentido uso?', answer: 'El olfato',  options: ['El gusto', 'El tacto', 'El olfato', 'El oído'] },
  { image: '🎵', question: 'Escucho música. ¿Qué sentido uso?', answer: 'El oído',    options: ['La vista', 'El gusto', 'El oído', 'El tacto'] },
  { image: '🍋', question: 'Como un limón. ¿Qué sentido uso?',  answer: 'El gusto',   options: ['El olfato', 'El gusto', 'El tacto', 'La vista'] },
  { image: '🔥', question: 'Toco algo caliente. ¿Qué sentido uso?', answer: 'El tacto', options: ['La vista', 'El tacto', 'El oído', 'El gusto'] },
  { image: '🌈', question: 'Veo un arcoíris. ¿Qué sentido uso?', answer: 'La vista',  options: ['El olfato', 'El oído', 'La vista', 'El tacto'] },
  // Hygiene habits
  { image: '🦷', question: '¿Cuándo debemos lavarnos los dientes?', answer: 'Después de comer', options: ['Por las noches solo', 'Después de comer', 'Una vez por semana', 'Antes de dormir solo'] },
  { image: '🧼', question: '¿Cuándo debemos lavarnos las manos?',   answer: 'Antes y después de comer', options: ['Solo por la mañana', 'Antes y después de comer', 'Solo en verano', 'Una vez al día'] },
  // Body parts
  { image: '🦴', question: 'La parte del cuerpo que conecta la cabeza con el tronco es...', answer: 'El cuello', options: ['El brazo', 'El cuello', 'La cintura', 'El hombro'] },
  { image: '🧠', question: '¿Dónde está el cerebro?',             answer: 'En la cabeza', options: ['En el pecho', 'En el brazo', 'En la cabeza', 'En el estómago'] },
  // Food groups
  { image: '🥦', question: '¿A qué grupo alimenticio pertenece el brócoli?', answer: 'Verduras', options: ['Frutas', 'Lácteos', 'Verduras', 'Cereales'] },
  { image: '🥛', question: '¿A qué grupo pertenece la leche?',    answer: 'Lácteos',    options: ['Frutas', 'Lácteos', 'Carnes', 'Cereales'] },
]

export default function Cuerpo({ onComplete, onBack, theme }) {
  return (
    <QuizBase
      questions={questions}
      onComplete={onComplete}
      onBack={onBack}
      theme={theme}
    />
  )
}
