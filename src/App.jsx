import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const cards = [
    { id: "hard", question: "What is the capital of France?", answer: "Paris" },
    { id: "medium", question: "What is the capital of Germany?", answer: "Berlin" },
    { id: "easy", question: "What is the capital of Spain?", answer: "Madrid" },
    { id: "easy", question: "What is the capital of Italy?", answer: "Rome" },
  ]

  const [currentCard, setCurrentCard] = useState(cards[0])
  const [numCards] = useState(cards.length)

  const nextCard = () => {
    let num = Math.floor(Math.random() * cards.length)
    setCurrentCard(cards[num])
  }

  return (
    <div className='App'>
      <div className='header'>
          <h1>Quizzy</h1>
          <h4>Study for your next test!</h4>
          <h5>Number of cards: {numCards} </h5>
          <Card id={currentCard.id} question={currentCard.question} answer={currentCard.answer}/>
      </div>
      <button className='nextBtn' onClick={nextCard}>→</button>
    </div>
  )
}

export default App;
