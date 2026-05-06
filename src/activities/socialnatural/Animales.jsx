import QuizBase from '../../components/QuizBase.jsx'

const questions = [
  { image: '🐕', question: '¿El perro es un animal doméstico o salvaje?', answer: 'Doméstico', options: ['Salvaje', 'Doméstico', 'Marino', 'Volador'] },
  { image: '🦁', question: '¿El león es un animal doméstico o salvaje?',  answer: 'Salvaje',   options: ['Doméstico', 'Salvaje', 'Marino', 'Granja'] },
  { image: '🐄', question: '¿La vaca es un animal doméstico o de granja?', answer: 'De granja', options: ['Salvaje', 'Marino', 'De granja', 'Volador'] },
  { image: '🐬', question: '¿El delfín dónde vive?',                       answer: 'En el agua', options: ['En el aire', 'En el agua', 'En el bosque', 'En el desierto'] },
  { image: '🦅', question: '¿Cómo se mueve el águila?',                   answer: 'Vuela',     options: ['Nada', 'Vuela', 'Corre', 'Trepa'] },
  { image: '🐠', question: '¿Cómo se mueve el pez?',                      answer: 'Nada',      options: ['Vuela', 'Corre', 'Nada', 'Salta'] },
  { image: '🐍', question: '¿Cómo se mueve la serpiente?',                answer: 'Se arrastra', options: ['Vuela', 'Nada', 'Corre', 'Se arrastra'] },
  { image: '🐦', question: '¿Qué cubre el cuerpo de los pájaros?',        answer: 'Plumas',    options: ['Pelo', 'Escamas', 'Plumas', 'Piel lisa'] },
  { image: '🐟', question: '¿Qué cubre el cuerpo de los peces?',          answer: 'Escamas',   options: ['Plumas', 'Pelo', 'Caparazón', 'Escamas'] },
  { image: '🐢', question: '¿Qué tiene en el lomo la tortuga?',           answer: 'Caparazón', options: ['Plumas', 'Escamas', 'Caparazón', 'Pelo'] },
  { image: '🐓', question: '¿La gallina pone huevos o tiene crías?',      answer: 'Pone huevos', options: ['Tiene crías', 'Pone huevos', 'Las dos', 'Ninguna'] },
  { image: '🐩', question: '¿La perra tiene huevos o crías?',             answer: 'Tiene crías', options: ['Pone huevos', 'Tiene crías', 'Las dos', 'Ninguna'] },
  { image: '🐇', question: '¿Qué come el conejo?',                        answer: 'Plantas y zanahorias', options: ['Carne', 'Peces', 'Plantas y zanahorias', 'Insectos'] },
  { image: '🦊', question: '¿La zorra es herbívora o carnívora?',         answer: 'Carnívora', options: ['Herbívora', 'Carnívora', 'Frugívora', 'Insectívora'] },
  { image: '🐧', question: '¿En qué clima vive el pingüino?',             answer: 'En el frío (Polo Sur)', options: ['En el desierto', 'En el bosque', 'En el frío (Polo Sur)', 'En el trópico'] },
  { image: '🐪', question: '¿Dónde vive el camello?',                     answer: 'En el desierto', options: ['En el mar', 'En el desierto', 'En la selva', 'En el Polo Norte'] },
]

export default function Animales({ onComplete, onBack, theme }) {
  return (
    <QuizBase
      questions={questions}
      onComplete={onComplete}
      onBack={onBack}
      theme={theme}
    />
  )
}
