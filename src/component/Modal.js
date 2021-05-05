import React, { useContext } from 'react';

import { ModalContext } from '../context/ModalContext';

import AddRestaurantForm from './AddRestaurantForm';


const Modal = () => {

      const [modalStateDisplayed, changeModalStateDisplayed] = useContext(ModalContext);

      const toggle = () => {
            changeModalStateDisplayed(!modalStateDisplayed);
      }

      return(
            modalStateDisplayed ? (
                  <div className="modal flex-col-center-center">
                              <h2>Vous souhaitez ajouter un restaurant ?</h2>
                              <button className="add-comment-button" onClick={toggle}>Annuler</button>
                              <AddRestaurantForm toggle={toggle} />
                  </div> 
            ) 
            : null
      )
}
      

export default Modal;
