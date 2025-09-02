import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Responsive modal styles
  const modalDialogStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  const modalContentStyle = {
    width: '100%',
    maxWidth: 500,
    margin: '0 16px',
    borderRadius: 8,
    // Mobile-specific
    '@media (max-width: 600px)': {
      maxWidth: '100%',
      margin: 0,
      borderRadius: 0,
      minHeight: '100vh',
    },
  };

  return (
    <>
      <button className="btn btn-primary" onClick={openModal}>
        Launch Modal
      </button>

      {isOpen && (
        <div
          className="modal-backdrop show"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1040,
          }}
        >
          <div
            className="modal-dialog"
            style={modalDialogStyle}
          >
            <div
              className="modal-content"
              style={{
                ...modalContentStyle,
                // Inline responsive for mobile
                ...(window.innerWidth <= 600
                  ? {
                      maxWidth: '100%',
                      margin: 0,
                      borderRadius: 0,
                      minHeight: '100vh',
                    }
                  : {}),
              }}
            >
              <div className="modal-header">
                <h5 className="modal-title">Modal Title</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={closeModal}
                >
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;