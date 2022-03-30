import { useContext } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import AlertContext from './../context/alert/AlertContext';

const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <p className='flex items-center mb-4 space-x-2 '>
        {alert.type === 'error' && <FaExclamationCircle color='red' />}
        <p className='flex-1 text-base font-semibold leading-7'>
          <strong>{alert.msg}</strong>
        </p>
      </p>
    )
  );
};

export default Alert;
