import Modal from '../components/modal/Modal'
import React from 'react'
import {useState} from 'react'
import './../styles/SubHeader.css'

export const SubHeader = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='container'>
        <p className='number'>+385 (0)21 344 842</p>
        <p className='mail'>desk@f-tours.hr</p>
        <button className='prijava' onClick={(e) => {setOpenModal(true); e.stopPropagation()}}>Prijava za putovanje!</button>
        {openModal && <Modal  closeModal={setOpenModal}/>}
    </div>
  )
}
