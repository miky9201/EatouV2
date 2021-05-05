export const areRestaurantsVisibleInMap = (restaurant, mapBounds) => mapBounds.s < restaurant.location.lat && 
restaurant.location.lat < mapBounds.n && mapBounds.o < restaurant.location.lng && 
restaurant.location.lng < mapBounds.e
      

