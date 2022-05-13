import React from 'react'
import './../modal/Modal.css'

function Modal({ closeModal }) {
  return (
    <div className='modal-background'>
        <div className='modal-container'>
            <div className='close-btn'>
                <button onClick={() => closeModal(false)}> X </button>
            </div>
            <div className='modal-content'>
                <button className='modal-btn'>PRIJAVA ZA ŠKOLSKA PUTOVANJA</button>
                <button className='modal-btn' onClick={window.location.href = '/Ostala-putovanja-forma'}>PRIJAVA ZA OSTALA PUTOVANJA</button>
            </div>
        </div>
    </div>
  )
}

export default Modal