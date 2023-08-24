import React, { useState } from "react";
import "./Modal.css";
import {construction} from "../assets";
import {tripguide} from "../assets";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content bg-tertiary">
            <h2>Тя анализира наличното пространство и създава ефективни планове на етажите, е</h2>
 
        <label className='flex flex-col'>
          <label className='flex flex-row'>  
            <img
            src={construction}
            alt='test'
            className='w-1/2 h-1/2 object-cover'
          />
          <img
            src={tripguide}
            alt='test'
            className='w-1/2 h-1/2 object-cover'
          />
         </label>

         <label className='flex flex-row'> 
           <img
            src={construction}
            alt='test'
            className='w-1/2 h-1/2 object-cover'/>
            <img
            src={tripguide}
            alt='test'
            className='w-1/2 h-1/2 object-cover'
          /> 
          </label>
          
          <label className='flex flex-row'> 
           <img
            src={construction}
            alt='test'
            className='w-1/2 h-1/2 object-cover'/>
            <img
            src={tripguide}
            alt='test'
            className='w-1/2 h-1/2 object-cover'
          /> 
          </label>

        </label>
          
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      <p>.</p>
    </>
  );
}
