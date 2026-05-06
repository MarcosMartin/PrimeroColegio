import QuizBase from '../../components/QuizBase.jsx'

// Short reading comprehension: show a mini text, then answer a question
const questions = [
  {
    image: '🐈',
    word: '"El gato duerme en el sofá.\nEl gato es de color naranja."',
    question: '¿De qué color es el gato?',
    answer: 'Naranja',
    options: ['Blanco', 'Naranja', 'Negro', 'Gris'],
  },
  {
    image: '🌧️',
    word: '"Hoy llueve mucho.\nAna coge el paraguas rojo."',
    question: '¿Qué coge Ana?',
    answer: 'El paraguas',
    options: ['El abrigo', 'El paraguas', 'El sombrero', 'Las botas'],
  },
  {
    image: '🍎',
    word: '"Papá compra tres manzanas.\nUna es roja y dos son verdes."',
    question: '¿Cuántas manzanas verdes hay?',
    answer: '2',
    options: ['1', '2', '3', '4'],
  },
  {
    image: '🐕',
    word: '"Mi perro se llama Tobi.\nTienes cuatro patas y una cola larga."',
    question: '¿Cuántas patas tiene Tobi?',
    answer: '4',
    options: ['2', '3', '4', '5'],
  },
  {
    image: '🏫',
    word: '"En el colegio hay muchos niños.\nJuegan en el patio durante el recreo."',
    question: '¿Dónde juegan los niños?',
    answer: 'En el patio',
    options: ['En el aula', 'En el patio', 'En casa', 'En el parque'],
  },
  {
    image: '🌸',
    word: '"En primavera salen las flores.\nHace calor y los pájaros cantan."',
    question: '¿Qué estación es?',
    answer: 'Primavera',
    options: ['Otoño', 'Invierno', 'Primavera', 'Verano'],
  },
  {
    image: '🎂',
    word: '"Hoy es el cumpleaños de Lucía.\nSopla cinco velas en su tarta."',
    question: '¿Cuántos años cumple Lucía?',
    answer: '5',
    options: ['3', '4', '5', '6'],
  },
  {
    image: '🐠',
    word: '"Los peces viven en el agua.\nSe mueven con sus aletas."',
    question: '¿Con qué se mueven los peces?',
    answer: 'Con sus aletas',
    options: ['Con sus patas', 'Con sus alas', 'Con sus aletas', 'Con su cola'],
  },
  {
    image: '⛄',
    word: '"En invierno hace mucho frío.\nA veces cae nieve y todo se pone blanco."',
    question: '¿Cómo es el tiempo en invierno?',
    answer: 'Frío',
    options: ['Caluroso', 'Frío', 'Lluvioso', 'Ventoso'],
  },
  {
    image: '🌻',
    word: '"Las plantas necesitan agua y sol.\nSin luz no pueden crecer."',
    question: '¿Qué necesitan las plantas?',
    answer: 'Agua y sol',
    options: ['Solo agua', 'Solo sol', 'Agua y sol', 'Tierra y sal'],
  },
]

export default function Lectura({ onComplete, onBack, theme }) {
  return (
    <QuizBase
      questions={questions}
      onComplete={onComplete}
      onBack={onBack}
      theme={theme}
    />
  )
}
