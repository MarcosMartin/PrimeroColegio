import QuizBase from '../../components/QuizBase.jsx'

const questions = [
  { image: '🌕', word: 'LUNA',     question: '¿Con qué sílaba empieza LUNA?',    answer: 'LU', options: ['LU', 'MA', 'SA', 'TA'] },
  { image: '🍅', word: 'TOMATE',   question: '¿Con qué sílaba empieza TOMATE?',  answer: 'TO', options: ['SO', 'NO', 'TO', 'LO'] },
  { image: '✋', word: 'MANO',     question: '¿Con qué sílaba empieza MANO?',    answer: 'MA', options: ['MA', 'PA', 'SA', 'LA'] },
  { image: '☀️', word: 'SOL',      question: '¿Con qué sílaba empieza SOL?',     answer: 'SO', options: ['TO', 'LO', 'SO', 'NO'] },
  { image: '🐟', word: 'PECES',    question: '¿Con qué sílaba empieza PECES?',   answer: 'PE', options: ['ME', 'PE', 'LE', 'SE'] },
  { image: '☁️', word: 'NUBE',     question: '¿Con qué sílaba empieza NUBE?',    answer: 'NU', options: ['MU', 'LU', 'TU', 'NU'] },
  { image: '🦁', word: 'DIENTE',   question: '¿Con qué sílaba empieza DIENTE?',  answer: 'DI', options: ['MI', 'DI', 'SI', 'LI'] },
  { image: '🌹', word: 'ROSA',     question: '¿Con qué sílaba empieza ROSA?',    answer: 'RO', options: ['SO', 'RO', 'TO', 'NO'] },
  { image: '🍓', word: 'FRESA',    question: '¿Con qué sílaba empieza FRESA?',   answer: 'FRE', options: ['PRE', 'FRE', 'TRE', 'BRE'] },
  { image: '🚌', word: 'BUS',      question: '¿Con qué sílaba empieza BUS?',     answer: 'BU', options: ['MU', 'BU', 'TU', 'LU'] },
  { image: '🎩', word: 'SOMBRERO', question: '¿Con qué sílaba empieza SOMBRERO?', answer: 'SOM', options: ['COM', 'TOM', 'SOM', 'NOM'] },
  { image: '🥛', word: 'LECHE',    question: '¿Con qué sílaba empieza LECHE?',   answer: 'LE', options: ['SE', 'TE', 'LE', 'PE'] },
]

export default function Consonantes({ onComplete, onBack, theme }) {
  return (
    <QuizBase
      questions={questions}
      onComplete={onComplete}
      onBack={onBack}
      theme={theme}
    />
  )
}
