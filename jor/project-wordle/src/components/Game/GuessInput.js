import React, { useState } from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

const GuessInput = ({ prevGuesses, setGuesses, answer }) => {
    const [guess, setGuess] = useState('');
    const [failStatus, setFailStatus] = useState(false);
    const [statusBanner, setStatusBanner] = useState(null);

    const ALLOWED_GUESSES = NUM_OF_GUESSES_ALLOWED - 1;

    function handleSubmit(e) {
        e.preventDefault()
        setGuess('')
        if (prevGuesses.length < ALLOWED_GUESSES) {
            setGuesses([...prevGuesses, guess])
        }
        if (guess === answer) {
            setFailStatus(true);
            setStatusBanner(
                <div className="happy banner">
                    <p>
                        <strong>Congratulations!</strong> Got it in
                        <strong>{prevGuesses.length + 1} guesses</strong>.
                    </p>
                </div>
            )
        } else if (guess != answer && prevGuesses.length === ALLOWED_GUESSES - 1) {
            setFailStatus(true);
            setStatusBanner(
                <div className="sad banner">
                    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
                </div>
            )
        }
    }
    return <>
        <form className='guess-input-wrapper' onSubmit={handleSubmit}>
            <label htmlFor='guess-input'>Enter guess:</label>
            <input
                id='guess-input'
                type='text'
                value={guess}
                pattern={`[a-zA-Z]{${ALLOWED_GUESSES}}`}
                title={`${ALLOWED_GUESSES} letter word`}
                disabled={failStatus}
                onChange={(e) => setGuess(e.target.value.toUpperCase())} />
        </form>
        {statusBanner}
    </>;
}

export default GuessInput;
