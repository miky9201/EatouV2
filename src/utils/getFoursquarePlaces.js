import { FOURSQUARE_CLIENT_ID } from '../config';
import { FOURSQUARE_CLIENT_SECRET } from '../config';

export const getFoursquarePlaces = (currentPosition, restaurantList, setRestaurantList) => {

      const restaurants = Array.from(restaurantList)

      fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${FOURSQUARE_CLIENT_ID}&client_secret=${FOURSQUARE_CLIENT_SECRET}&v=20180323&radius=1000&ll=${currentPosition.lat},${currentPosition.lng}&query=restaurant`)
            .then(res => res.json())
            .then(res => res.response.groups[0].items) // tableau des restos
            .then(res => {
                  
                  for (let index = 0; index < res.length; index++) {

                        restaurants.push({
                              id: restaurants.length + 1,
                              restaurantName: res[index].venue.name,
                              location: {
                                    lat: res[index].venue.location.lat,
                                    lng: res[index].venue.location.lng
                              },
                              ratings : [
                                    {
                                          stars : null,
                                          comment : null
                                    }
                              ]
                        })
                  }
            }
      )     
      setRestaurantList(restaurants);
} 