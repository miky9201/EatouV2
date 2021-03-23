import React, { useContext, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { isRestaurantAverageMoreThanFilterValue } from '../utils/isRestaurantAverageMoreThanFilterValue';
import { areRestaurantsVisibleInMap } from '../utils/areRestaurantsVisibleInMap';
import { FilterContext } from '../FilterContext/FilterContext';
import { GoogleMapBoundsContext } from '../GoogleMapBoundsContext/GoogleMapBoundsContext';
import { RestaurantListContext } from '../RestaurantListContext/RestaurantListContext';

import { getAddress } from '../utils/getAddress';
import { getStreetViewImg } from '../utils/getStreetViewImg';


const RestaurantDisplayer = () => {
      const [ filterValue ] = useContext(FilterContext);
      const [ mapBoundsValue ] = useContext(GoogleMapBoundsContext);
      const [ restaurantList ] = useContext(RestaurantListContext);

      useEffect(() => {
            restaurantList.forEach(item => {
                  getStreetViewImg(item);
                  getAddress(item)
            });
      },[restaurantList]);
      
      return (
            restaurantList.map(restaurant => isRestaurantAverageMoreThanFilterValue(restaurant, filterValue) && areRestaurantsVisibleInMap(restaurant, mapBoundsValue) ? 
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} /> 
                  : null
            )
      )
}

export default RestaurantDisplayer;
