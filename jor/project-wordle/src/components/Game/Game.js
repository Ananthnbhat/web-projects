import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from './GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [guesses, setGuesses] = useState([]);

  return <>
    <GuessResults guessList={guesses} answer={answer} />
    <GuessInput prevGuesses={guesses} setGuesses={setGuesses} answer={answer} /></>
}

export default Game;
