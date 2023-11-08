import React, { useState } from 'react';

function Modal({ children, isOpen, onClose, width, height }) {
  return (
    isOpen && (
      <div
        className="relative z-[1000]"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex justify-center p-12 text-center sm:items-center sm:p-10">
            <div className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all ${width} ${height} border-8 border-[#0A405C]`}>
              <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                {children}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                {children}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    )
  );
}

function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const ModalWrapper = ({ children, width, height }) => (
    <Modal isOpen={isModalOpen} onClose={closeModal} width={width} height={height}>
      {children}
    </Modal>
  );

  return [openModal, closeModal, ModalWrapper];
}

export default useModal;
