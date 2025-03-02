import React from 'react'
import BookingModal from '../CarBooking/BookingModal'
import { CarsProps } from './CarsList'

const Modal = ({car}:{car?:CarsProps}) => {
return (
  <>
    {/* You can open the modal using document.getElementById('ID').showModal() method */}
    <dialog id="show-modal" className="modal backdrop-blur-md">
      <div className="modal-box w-11/12 max-w-5xl bg-white">
        <BookingModal carDetail={car}/>
      </div>
    </dialog>
  </>
)
}

export default Modal