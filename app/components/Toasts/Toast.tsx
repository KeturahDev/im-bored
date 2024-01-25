import React, { MouseEventHandler } from 'react';
import styles from './styles.module.css';

export type ToastProps = {
  mode: string;
  onClose?: any;
  message: string;
  id: string;
};

const Toast = ({ mode, onClose, message, id }: ToastProps) => {
  const classes = React.useMemo(
    () => [styles.toast, styles[mode]].join(' '),
    [mode]
  );

  return (
    <div onClick={() => onClose(id)} className={classes}>
      {message}
    </div>
  );
};

export default Toast;
