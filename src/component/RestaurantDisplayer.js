import React, { useContext, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';

import { FilterContext } from '../context/FilterContext';
import { GoogleMapBoundsContext } from '../context/GoogleMapBoundsContext';
import { RestaurantListContext } from '../context/RestaurantListContext';

import { getAddress } from '../utils/getAddress';
import { getStreetViewImg } from '../utils/getStreetViewImg';
import { isRestaurantAverageMoreThanFilterValue } from '../utils/isRestaurantAverageMoreThanFilterValue';
import { areRestaurantsVisibleInMap } from '../utils/areRestaurantsVisibleInMap';

const RestaurantDisplayer = () => {
      const [ filterValue ] = useContext(FilterContext);
      const [ mapBoundsValue ] = useContext(GoogleMapBoundsContext);
      const [ restaurantList ] = useContext(RestaurantListContext);
      
      useEffect(() => {
            restaurantList.forEach(restaurant => {
                  getStreetViewImg(restaurant);
                  getAddress(restaurant);
            });
      }, [restaurantList]);
 
      return (
            restaurantList.map(restaurant => isRestaurantAverageMoreThanFilterValue(restaurant, filterValue) 
            && areRestaurantsVisibleInMap(restaurant, mapBoundsValue) ? 
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} /> 
                  : null
            )
      )
}

export default RestaurantDisplayer;
