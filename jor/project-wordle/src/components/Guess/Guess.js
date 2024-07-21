import React, { useState, useEffect } from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {

  const guessWithClasses = checkGuess(guess, answer);

  return <div>
    <p className='guess' key={Math.random()}>
      {guess === ' ' ? (range(NUM_OF_GUESSES_ALLOWED - 1)).map((_, i) => <span key={i} className='cell'>{guess}</span>) :
        guessWithClasses.map((guess, i) => <span key={i} className={`cell ${guess.status}`}>{guess.letter}</span>)}
    </p>
  </div>;
}

export default Guess;
