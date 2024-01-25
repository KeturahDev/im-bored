import React from 'react';
import useToastPortal from '../../utils/hooks/useToastPortal';
import ReactDOM from 'react-dom';
import Toast, { ToastProps } from './Toast';
import { uuid } from '@/app/utils/uuid';

export type ToastHandle = {
  addMessage: (toast: Message) => void;
};
type Message = { mode: string; message: string };
type Props = {};

const ToastPortal = React.forwardRef<ToastHandle, Props>(({}, ref) => {
  const [toasts, setToasts] = React.useState<ToastProps[]>([]);
  const { loaded, portalID } = useToastPortal();

  const removeToast = (id: string) => {
    setToasts(toasts.filter((t) => t.id !== id));
  };

  React.useImperativeHandle(ref, () => ({
    addMessage(toast: Message) {
      setToasts([...toasts, { ...toast, id: uuid(), onClose: removeToast }]);
    },
  }));
  console.log(toasts);

  return loaded ? (
    ReactDOM.createPortal(
      <div className='flex items-center w-full max-w-xs'>
        {toasts.map((t) => (
          <Toast
            key={t.id}
            message={t.message}
            mode={t.mode}
            onClose={removeToast}
            id={t.id}
          />
        ))}
      </div>,
      document.getElementById(portalID)!
    )
  ) : (
    <></>
  );
});

export default ToastPortal;
