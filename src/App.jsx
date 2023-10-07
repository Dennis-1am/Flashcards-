import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const cards = [
    { id: "hard", question: "What is the capital of France?", answer: "Paris" },
    { id: "hard", question: "What is the capital of Germany?", answer: "Berlin" },
    { id: "hard", question: "What is the capital of Spain?", answer: "Madrid" },
    { id: "hard", question: "What is the capital of Italy?", answer: "Rome" },
  ]

  const [currenCardIndex, setCurrentCardIndex] = useState(0)
  const [currentCard, setCurrentCard] = useState(cards[currenCardIndex])
  const [numCards] = useState(cards.length)
  const [inputAnswer, setInputAnswer] = useState('')

  const nextCard = () => {
    if (currenCardIndex < numCards - 1) {
      setCurrentCardIndex(currenCardIndex + 1)
      setCurrentCard(cards[currenCardIndex + 1])
    }
    if (currenCardIndex === numCards - 1) {
      setCurrentCardIndex(0)
      setCurrentCard(cards[0])
    }
    console.log(currenCardIndex)
  }

  const prevCard = () => {
    if (currenCardIndex > 0) {
      setCurrentCardIndex(currenCardIndex - 1)
      setCurrentCard(cards[currenCardIndex - 1])
    }
    if (currenCardIndex === 0) {
      setCurrentCardIndex(numCards - 1)
      setCurrentCard(cards[numCards - 1])
    }
    console.log(currenCardIndex)
  }

  const shuffleCard = () => {
    for (let i = numCards - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    setCurrentCard(cards[0])
    setCurrentCardIndex(0)
  }

  const check = () => {
    if (inputAnswer.toString() == currentCard.answer) {
      currentCard.id = 'easy'
    } else {
      currentCard.id = 'hard'
    }
  }

  // write me a async function that waits for the inputAnswer to update
  // then checks the answer

  const submitAnswer = () => {
    setInputAnswer(document.getElementById('inputAnswer').value)
    console.log(currentCard.answer)
    console.log(inputAnswer)
    console.log(currentCard.answer == inputAnswer)
    check()
  }

  return (
    <div className='App'>
      <div className='header'>
          <h1>Quizzy</h1>
          <h4>Study for your next test!</h4>
          <h5>Number of cards: {numCards} </h5>
          <Card id={currentCard.id} question={currentCard.question} answer={currentCard.answer}/>
      </div>
      <div className='submit-answerContainer'>
        <input id='inputAnswer'/>
        <button className='button addBtn' onClick={submitAnswer}>Add</button>
      </div>
      <button className='button prevBtn' onClick={prevCard}>←</button>
      <button className='button nextBtn' onClick={nextCard}>→</button>
      <button className='button shuffleBtn' onClick={shuffleCard}>Shuffle</button>
    </div>
  )
}

export default App;
