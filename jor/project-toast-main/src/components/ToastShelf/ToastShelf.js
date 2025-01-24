import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, dismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(toast => {
        return <li key={toast.id} className={styles.toastWrapper}>
          <Toast variant={toast.toastVariant} dismiss={() => dismiss(toast)}>{toast.message}</Toast>
        </li>
      })}
    </ol>
  );
}

export default ToastShelf;
