import QuizBase from '../../components/QuizBase.jsx'

const questions = [
  { image: '🍬', word: '"María tiene 5 caramelos.\nSu amiga le da 3 más.\n¿Cuántos caramelos tiene María?"', question: '¿Cuántos caramelos tiene María?', answer: '8', options: ['6', '7', '8', '9'] },
  { image: '🐦', word: '"En un árbol hay 9 pájaros.\nVuelan 4. ¿Cuántos quedan?"', question: '¿Cuántos pájaros quedan en el árbol?', answer: '5', options: ['3', '4', '5', '6'] },
  { image: '🍪', word: '"Papá hornea 12 galletas.\nCome 3. ¿Cuántas galletas quedan?"', question: '¿Cuántas galletas quedan?', answer: '9', options: ['7', '8', '9', '10'] },
  { image: '⚽', word: '"En el partido juegan\n6 niños del equipo rojo\ny 6 del equipo azul.\n¿Cuántos niños en total?"', question: '¿Cuántos niños juegan en total?', answer: '12', options: ['10', '11', '12', '13'] },
  { image: '🌹', word: '"Ana tiene 7 rosas rojas\ny 5 rosas blancas.\n¿Cuántas rosas tiene en total?"', question: '¿Cuántas rosas tiene Ana?', answer: '12', options: ['10', '11', '12', '13'] },
  { image: '🚌', word: '"En el autobús hay 15 personas.\nBajan 8 en la primera parada.\n¿Cuántas quedan?"', question: '¿Cuántas personas quedan en el autobús?', answer: '7', options: ['5', '6', '7', '8'] },
  { image: '📚', word: '"Lucas tiene 10 libros.\nLee 4 esta semana.\n¿Cuántos le quedan por leer?"', question: '¿Cuántos libros le quedan a Lucas?', answer: '6', options: ['4', '5', '6', '7'] },
  { image: '🍓', word: '"En la cesta hay 20 fresas.\nComen 9.\n¿Cuántas fresas quedan?"', question: '¿Cuántas fresas quedan en la cesta?', answer: '11', options: ['9', '10', '11', '12'] },
  { image: '🐣', word: '"Una gallina pone 3 huevos\nel lunes y 4 el martes.\n¿Cuántos huevos en total?"', question: '¿Cuántos huevos pone en total?', answer: '7', options: ['5', '6', '7', '8'] },
  { image: '🎁', word: '"Para su cumpleaños, Carlos\nrecibe 6 regalos por la mañana\ny 5 por la tarde.\n¿Cuántos regalos en total?"', question: '¿Cuántos regalos recibe Carlos?', answer: '11', options: ['9', '10', '11', '12'] },
]

export default function Problemas({ onComplete, onBack, theme }) {
  return (
    <QuizBase
      questions={questions}
      onComplete={onComplete}
      onBack={onBack}
      theme={theme}
    />
  )
}
