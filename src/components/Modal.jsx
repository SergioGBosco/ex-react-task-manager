import React from 'react'
import { createPortal } from 'react-dom'
const Modal = ({ title, content, show, onClose, onConfirm, confirmText = "Conferma" }) => {


  if (!show) return null

  return createPortal(
    <div className='modal-overlay'>
      <div className='modal'>
        <h2>{title}</h2>
        {content}
        <div className='modal-actions'>
          <button onClick={onClose}>Annulla</button>
          <button onClick={onConfirm}>{confirmText}</button>
        </div>

      </div>
    </div>,
    document.body
  );
}

export default Modal
