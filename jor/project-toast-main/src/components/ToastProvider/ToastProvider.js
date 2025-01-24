import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {

  const [toasts, setToasts] = React.useState([])

  React.useEffect(() => {
    function dismissAllToasts(e) {
      if (e.code === "Escape")
        setToasts([])
    }
    window.addEventListener("keydown", dismissAllToasts);
    return () => {
      window.removeEventListener("keydown", dismissAllToasts)
    }
  }, [])

  const addToast = ({ message, toastVariant }) => {
    setToasts([
      ...toasts,
      {
        id: crypto.randomUUID(),
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
