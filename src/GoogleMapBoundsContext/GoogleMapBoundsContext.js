import React, { useState, createContext } from 'react';

export const GoogleMapBoundsContext = createContext();

export const GoogleMapBoundsProvider = (props) => {
      const [mapBoundsValue, setMapBoundsValue] = useState({});
      return(
            <GoogleMapBoundsContext.Provider value={[mapBoundsValue, setMapBoundsValue]}>
                  {props.children}
            </GoogleMapBoundsContext.Provider>
      )
}

      