import { FOURSQUARE_CLIENT_ID } from '../config';
import { FOURSQUARE_CLIENT_SECRET } from '../config';

export const getFoursquareClient = async (currentPosition, restaurantList) => await fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${FOURSQUARE_CLIENT_ID}&client_secret=${FOURSQUARE_CLIENT_SECRET}&v=20180323&radius=1000&ll=${currentPosition.lat},${currentPosition.lng}&query=restaurant`)
      .then(res => res.json())
      .then(res => res.response.groups[0].items) // tableau des restos
      .then(async res => {
            const restaurants = Array.from(restaurantList)
            for (let index = 0; index < res.length; index++) {
                  restaurants.push({
                        id: restaurants.length + 1,
                        restaurantName: res[index].venue.name,
                        address: {
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
            return await restaurants
}) 