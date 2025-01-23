import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ content, variant = 'notice', dismiss }) {

  const Icon = getIcon(variant)

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {content}
      </p>
      <button className={styles.closeButton} onClick={dismiss}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

function getIcon(variant) {
  switch (variant) {
    case 'notice': return ICONS_BY_VARIANT.notice
    case 'warning': return ICONS_BY_VARIANT.warning
    case 'success': return ICONS_BY_VARIANT.success
    case 'error': return ICONS_BY_VARIANT.error

    default:
      break;
  }
}

export default Toast;
