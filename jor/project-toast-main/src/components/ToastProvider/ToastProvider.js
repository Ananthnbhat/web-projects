import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {

  const [toasts, setToasts] = React.useState([])

  const addToast = ({ message, toastVariant }) => {
    setToasts([
      ...toasts,
      {
        id: crypto.randomUUID,
        message,
        toastVariant,
      }
    ])
  }

  const dismissToast = dismissedToast => {
    setToasts(() => toasts.filter(toast => toast != dismissedToast))
  }

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, dismissToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}


export default ToastProvider;
