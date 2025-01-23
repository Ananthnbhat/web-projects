import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import Toast from '../Toast'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [toastVariant, setToastVariant] = React.useState('notice')
  const [message, setMessage] = React.useState('')
  const [showToast, setShowToast] = React.useState(false)

  const toggleToast = () => setShowToast(true)
  const dismissToast = () => setShowToast(false)

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {showToast && <Toast content={message} variant={toastVariant} dismiss={dismissToast} />}

      <div className={styles.controlsWrapper}>
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
            <label htmlFor="variant-unset">
              <input
                id="variant-unset"
                type="radio"
                name="variant"
                value="unset"
                checked={toastVariant === ""}
                onChange={() => setToastVariant("")}
              />
              unset
            </label>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={toggleToast}>Pop Toast!</Button>
            <p>Toast type: {toastVariant || "not-set"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
