import React, { useState, useEffect } from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guessList, answer }) {

  const ALLOWED_GUESSES = NUM_OF_GUESSES_ALLOWED - 1;

  const initialState = range(ALLOWED_GUESSES).map(() => ' ')
  const [guessArr, setGuessArr] = useState(initialState);

  useEffect(() => {
    if (guessList.length > 0 && guessList.length < NUM_OF_GUESSES_ALLOWED) {
      const tempArray = initialState
      if (tempArray.length < NUM_OF_GUESSES_ALLOWED) {
        guessList.forEach((element, i) => {
          tempArray.fill(element, i, i + 1)
        });
      }
      setGuessArr(tempArray)

    };
    if (guessList.length > ALLOWED_GUESSES) {
      setGuessArr(initialState)
    }
  }, [guessList]);


  return <div className='guess-results'>
    {range(ALLOWED_GUESSES).map((_, index) => (
      <Guess key={index} guess={guessArr[index]} answer={answer} />
    ))}
  </div>;
}

export default GuessResults;
