import QuizBase from '../../components/QuizBase.jsx'

// SVG shapes rendered as inline strings in the "image" field
// We'll use actual emoji+description for clarity at this age
const questions = [
  {
    image: '⬛',
    question: '¿Cómo se llama esta figura? Tiene 4 lados iguales.',
    answer: 'Cuadrado',
    options: ['Círculo', 'Cuadrado', 'Triángulo', 'Rectángulo'],
  },
  {
    image: '🔵',
    question: '¿Cómo se llama esta figura? No tiene lados, es redonda.',
    answer: 'Círculo',
    options: ['Cuadrado', 'Círculo', 'Triángulo', 'Rombo'],
  },
  {
    image: '🔺',
    question: '¿Cómo se llama esta figura? Tiene 3 lados y 3 vértices.',
    answer: 'Triángulo',
    options: ['Círculo', 'Cuadrado', 'Triángulo', 'Rectángulo'],
  },
  {
    image: '▬',
    question: '¿Cómo se llama esta figura? Tiene 4 lados pero no todos iguales.',
    answer: 'Rectángulo',
    options: ['Rombo', 'Círculo', 'Cuadrado', 'Rectángulo'],
  },
  {
    image: '🔷',
    question: '¿Cómo se llama esta figura? Tiene 4 lados iguales pero está inclinada.',
    answer: 'Rombo',
    options: ['Rombo', 'Cuadrado', 'Triángulo', 'Círculo'],
  },
  {
    image: '⬛',
    question: '¿Cuántos lados tiene un cuadrado?',
    answer: '4',
    options: ['3', '4', '5', '6'],
  },
  {
    image: '🔺',
    question: '¿Cuántos lados tiene un triángulo?',
    answer: '3',
    options: ['2', '3', '4', '5'],
  },
  {
    image: '🔵',
    question: 'Una pelota de fútbol es redonda. ¿A qué figura se parece?',
    answer: 'Esfera',
    options: ['Cubo', 'Esfera', 'Cilindro', 'Pirámide'],
  },
  {
    image: '🎲',
    question: 'Un dado tiene caras cuadradas. ¿Cómo se llama este cuerpo geométrico?',
    answer: 'Cubo',
    options: ['Cubo', 'Esfera', 'Cilindro', 'Pirámide'],
  },
  {
    image: '🥫',
    question: 'Una lata de conservas tiene forma de...',
    answer: 'Cilindro',
    options: ['Esfera', 'Cubo', 'Cilindro', 'Triángulo'],
  },
  {
    image: '🔴🔵🟡',
    question: 'Pon los colores en orden: rojo, azul, rojo, azul, rojo... ¿Qué sigue?',
    answer: 'Azul',
    options: ['Rojo', 'Azul', 'Verde', 'Amarillo'],
  },
  {
    image: '🔺🔺🔵🔺🔺🔵',
    question: 'En este patrón: triángulo, triángulo, círculo... ¿Qué viene después del círculo?',
    answer: 'Triángulo',
    options: ['Triángulo', 'Círculo', 'Cuadrado', 'Rombo'],
  },
]

export default function Geometria({ onComplete, onBack, theme }) {
  return (
    <QuizBase
      questions={questions}
      onComplete={onComplete}
      onBack={onBack}
      theme={theme}
    />
  )
}
