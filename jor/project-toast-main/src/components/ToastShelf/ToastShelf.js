import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf({ toasts }) {
  const { dismissToast } = React.useContext(ToastContext)
  return (
    <ol className={styles.wrapper}>
      {toasts.map(toast => {
        return <li key={toast.id} className={styles.toastWrapper}>
          <Toast variant={toast.toastVariant} dismiss={() => dismissToast(toast)}>{toast.message}</Toast>
        </li>
      })}
    </ol>
  );
}

export default ToastShelf;
