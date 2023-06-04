import React from "react";
import { range } from '../../utils'

const GuessResults = ({guesses}) => {

  return (
    <div className="guess-results">
      {guesses.map(guess => <p key={crypto.randomUUID()} className="guess">
        {range(0,5).map((_, index) =>
            <span key={crypto.randomUUID()} className="cell">{guess[index]}</span>
        )}
      </p>)}
    </div>
  );
}

export default GuessResults;
