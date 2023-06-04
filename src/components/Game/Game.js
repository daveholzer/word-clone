import React from 'react';

import { WORDS } from '../../data';
import { sample, range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import GuessInput from '../GuessInput/GuessInput';
import Guess from '../Guess/Guess';
import WinBanner from '../WinBanner/WinBanner';
import LoseBanner from '../LoseBanner/LoseBanner';

const initial = range(0, NUM_OF_GUESSES_ALLOWED).map(_ => '      ');

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState(initial)
  const [guessResults, setGuessResults] = React.useState([]);
  const [guessIndex, setGuessIndex] = React.useState(0);

  console.log('answer', answer);

  const findLoser = () => {
    const lastResults = guessResults[guessResults.length - 1];
    return lastResults.find(
      item => item.status === "incorrect" || item.status === "misplaced");
  }

  const isLoser = () => {
    if (guessResults.length === 0) return false;
    if (guessIndex < NUM_OF_GUESSES_ALLOWED) return false;
    return !!findLoser();  
  }

  const isWinner = () => {
    if (guessResults.length === 0) return false;
    if (guessIndex > NUM_OF_GUESSES_ALLOWED) return false;
    return !findLoser();
  }

  const isGameOver = () => {
    return isLoser() || isWinner();
  }

  const addNewGuess = (newGuess) => {
    if (guessIndex >= NUM_OF_GUESSES_ALLOWED) return;

    const newList = guesses.toSpliced(guessIndex, 1, newGuess);
    const results = checkGuess(newGuess, answer);
    const newResults = guessResults.toSpliced(guessIndex, 1, results);

    setGuessResults(newResults);
    setGuessIndex(guessIndex + 1);
    setGuesses(newList);
  }

  const handleReset = () => {
    setAnswer(sample(WORDS));
    setGuessResults([]);
    setGuesses(initial);
    setGuessIndex(0);
  }

  const findResults = (index) => guessResults.length > index ? guessResults[index] : [];

  return (
    <>
      <div>
        <button className='button' onClick={handleReset}>Reset</button>
      </div>
      <div className="guess-results">
      {guesses.map((guess, index) => <p key={crypto.randomUUID()} className="guess">
        <Guess guess={guess} results={findResults(index)} />
      </p>)}
      </div>
      <div>
        {(!isGameOver()) && <GuessInput addNewGuess={addNewGuess}/>}
        {(isWinner()) && <WinBanner tries={guessIndex} />}
        {(isLoser()) && <LoseBanner answer={answer} />}
      </div>
    </>
  )
}

export default Game;
