import React, { useState, createContext } from 'react';

export const ClickedLatLngContext = createContext();

export const ClickedLatLngProvider = (props) => {
      const [clickedLatLng, setClickedLatLng] = useState({});
      return(
            <ClickedLatLngContext.Provider value={[clickedLatLng, setClickedLatLng]}>
                  {props.children}
            </ClickedLatLngContext.Provider>
      )
}