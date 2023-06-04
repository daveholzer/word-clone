import React from "react";

const Guess = ({guess, results}) => {
  // console.log('results', results);

  const makeClassName = (index) => {
    if (index >= results.length) {
      return "cell";
    }
    const status = results[index].status;
    return `cell ${status}`;
  }

  return (
    <>
      {guess.split('').map((guessChar, index) =>
        <span key={crypto.randomUUID()} className={makeClassName(index)}>{guessChar}</span>
      )}
    </>
  );
}

export default Guess;
