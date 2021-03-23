import React, { useState, createContext } from 'react';

export const StarsContext = createContext();

export const StarsProvider = (props) => {
      const [starValue, setStarValue] = useState(0);
      return(
            <StarsContext.Provider value={[starValue, setStarValue]}>
                  {props.children}
            </StarsContext.Provider>
      )
}