import React, { useState, createContext } from 'react';
import restaurantListJSON from '../restaurants.json';

export const RestaurantListContext = createContext();

export const RestaurantListProvider = (props) => {
      const [ restaurantList, setRestaurantList ] = useState(restaurantListJSON)

      return(
            <RestaurantListContext.Provider value={[restaurantList, setRestaurantList]}>
                  {props.children}
            </RestaurantListContext.Provider>
      )
}
      