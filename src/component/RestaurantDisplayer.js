import React, { useContext, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { isRestaurantAverageMoreThanFilterValue } from '../utils/isRestaurantAverageMoreThanFilterValue';
import { areRestaurantsVisibleInMap } from '../utils/areRestaurantsVisibleInMap';
import { FilterContext } from '../FilterContext/FilterContext';
import { GoogleMapBoundsContext } from '../GoogleMapBoundsContext/GoogleMapBoundsContext';
import { RestaurantListContext } from '../RestaurantListContext/RestaurantListContext';
import { CurrentPositionContext } from '../CurrentPositionContext/CurrentPositionContext';

import { getAddress } from '../utils/getAddress';
import { getStreetViewImg } from '../utils/getStreetViewImg';
import { getFoursquarePlaces } from '../utils/getFoursquarePlaces';



const RestaurantDisplayer = () => {
      const [ filterValue ] = useContext(FilterContext);
      const [ mapBoundsValue ] = useContext(GoogleMapBoundsContext);
      const [ restaurantList, setRestaurantList ] = useContext(RestaurantListContext);
      const [ currentPosition ] = useContext(CurrentPositionContext);


      useEffect(() => {
            restaurantList.forEach(item => {
                  getStreetViewImg(item);
                  getAddress(item);
            });
      });

      // Créer une fonction async similaire à addNewRestaurant() avec paramètres (currentPosition) et qui va chercher les lat, lng et name avec getFourSquarePlaces
 
      return (
            restaurantList.map(restaurant => isRestaurantAverageMoreThanFilterValue(restaurant, filterValue) && areRestaurantsVisibleInMap(restaurant, mapBoundsValue) ? 
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} /> 
                  : null
            )
      )
}

export default RestaurantDisplayer;
