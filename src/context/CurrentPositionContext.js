import React, { useState, createContext } from 'react';

export const CurrentPositionContext = createContext();

export const CurrentPositionProvider = (props) => {
      const [ currentPosition, setCurrentPosition ] = useState();
      return(
            <CurrentPositionContext.Provider value={[currentPosition, setCurrentPosition]}>
                  {props.children}
            </CurrentPositionContext.Provider>
      )
}

      