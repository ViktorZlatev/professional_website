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
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <img
            src={construction}
            alt='test'
            className='w-full h-full object-cover'
          />
          <img
            src={tripguide}
            alt='test'
            className='w-full h-full object-cover'
          />
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
