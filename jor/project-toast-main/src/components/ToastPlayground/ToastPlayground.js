import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import ToastShelf from '../ToastShelf'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [toastVariant, setToastVariant] = React.useState('notice')
  const [message, setMessage] = React.useState('')
  const [toasts, setToasts] = React.useState([])

  const setNewToast = (e) => {
    e.preventDefault()
    const newToast = {
      id: crypto.randomUUID(),
      message,
      toastVariant,
    }
    setToasts([...toasts, newToast])
  }

  const popToast = dismissedToast => {
    setToasts(() => toasts.filter(toast => toast != dismissedToast))
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} dismiss={popToast} />

      <form onSubmit={setNewToast} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} onChange={(e) => setMessage(e.target.value)} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map(option => (
              <label htmlFor={`variant-${option}`} key={option}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={`${option}`}
                  checked={toastVariant === `${option}`}
                  onChange={event => setToastVariant(event.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
            <p>Toast type: {toastVariant || "not-set"}</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
