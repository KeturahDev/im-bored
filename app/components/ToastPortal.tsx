import useToastPortal from '../utils/hooks/useToastPortal';
import ReactDOM from 'react-dom';

const ToastPortal = () => {
  const { loaded, portalID } = useToastPortal();

  return loaded ? (
    ReactDOM.createPortal(
      <div className='flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800'>
        Toast
      </div>,
      document.getElementById(portalID)!
    )
  ) : (
    <></>
  );
};

export default ToastPortal;
