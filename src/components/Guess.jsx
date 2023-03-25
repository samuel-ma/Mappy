
import React from 'react'

const Guess = () => {
    
    const handleClick = () => {
        let randomNum = Math.floor(Math.random() * 10) + 1;
        console.log(randomNum);
        let userInput = prompt("Type a number");
        alert(`Computer number: ${randomNum}, your guess: ${userInput}`);
    }

  return (
        <section className='sections'>
            <h1>Task: Add a button and handle a click event</h1>
             <button onClick={handleClick}>Guess a number between 1 and 10</button>
        </section>
  )
}

export default Guess