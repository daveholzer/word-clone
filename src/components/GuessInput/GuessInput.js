import React from "react";

function GuessInput({addNewGuess}) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit", guess);
    addNewGuess(guess)
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter Guess: </label>
      <input id="guess-input" type="text" size="12" pattern="[A-Z]{5,5}" value={guess} onChange={(event) => {
        const text = event.target.value.toUpperCase();
        setGuess(text);
      }} />
    </form>
  );
}

export default GuessInput;
