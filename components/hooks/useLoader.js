import { useState } from 'react';

export const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const openLoader = (msg) => {
    setMessage(msg);
    setIsLoading(true);
  };

  const closeLoader = () => {
    setMessage('');
    setIsLoading(false);
  };

  const Loader = () => {
    if (!isLoading) return null;

    return <Modal isOpen={isLoading} message={message} />;
  };

  return [openLoader, closeLoader, Loader];
};

function Modal({ message, isOpen }) {
  return (
    isOpen && (
      <div
        className="relative z-[1000]"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed top-1/2 inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex justify-center items-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white py-7 text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg flex items-center justify-center gap-2">
              {/* <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
              </div> */}
              <div className="loader font-bold">
                <div className="face">
                  <div className="circle"></div>
                </div>
                <div className="face">
                  <div className="circle"></div>
                </div>
              </div>
              <p className="text-2xl">{message}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
