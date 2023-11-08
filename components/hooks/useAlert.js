import { CloseIcon } from '@/utils/icons/icons';
import React, { useState, useEffect } from 'react';

function Alert({ message, type, onClose }) {
  return (
    <div
      style={{ backgroundColor: type === 'success' ? 'green' : 'red' }}
      className={`fixed z-[1000] top-4 right-4 text-white p-4 px-7 rounded shadow-md`}
    >
      <div className="relative">
        {message}{' '}
        <span
          onClick={onClose}
          className="cursor-pointer absolute top-[-24px] right-[-34px] bg-slate-200 p-1 rounded-md"
        >
          <CloseIcon />
        </span>
      </div>
    </div>
  );
}

function useAlert() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  const openAlert = (message, type = 'success') => {
    setAlertMessage(message);
    setAlertType(type);
    setIsAlertOpen(true);
    setTimeout(() => {
      setIsAlertOpen(false);
    }, 3000);
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  const AlertWrapper = () => {
    if (!isAlertOpen) {
      return null;
    }
    return (
      <Alert message={alertMessage} type={alertType} onClose={closeAlert} />
    );
  };

  return [openAlert, AlertWrapper];
}

export default useAlert;
