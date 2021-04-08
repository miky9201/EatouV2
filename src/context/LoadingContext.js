import React, { useState, createContext } from 'react';

export const LoadingContext = createContext();

export const LoadingProvider = (props) => {
      const [loadingStateDisplayed, changeLoadingStateDisplayed] = useState(true);

      return(
            <LoadingContext.Provider value={[loadingStateDisplayed, changeLoadingStateDisplayed]}>
                  {props.children}
            </LoadingContext.Provider>
      )
}
      