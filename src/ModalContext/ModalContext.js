import React, { useState, createContext } from 'react';

export const ModalContext = createContext();

export const ModalProvider = (props) => {
      const [modalStateDisplayed, changeModalStateDisplayed] = useState(false);

      return(
            <ModalContext.Provider value={[modalStateDisplayed, changeModalStateDisplayed]}>
                  {props.children}
            </ModalContext.Provider>
      )
}
      