import { FOURSQUARE_CLIENT_ID } from '../config';
import { FOURSQUARE_CLIENT_SECRET } from '../config';
import { getAddress } from './getAddress';
import { getStreetViewImg } from './getStreetViewImg'; 
// import { restaurantBuilder } from './restaurantBuilder';

export const getFoursquarePlaces = async (currentPosition) => {
      const restaurants = []

      await fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${FOURSQUARE_CLIENT_ID}&client_secret=${FOURSQUARE_CLIENT_SECRET}&v=20180323&radius=1500&ll=${currentPosition.lat},${currentPosition.lng}&query=restaurant`)
            .then(res => res.json())
            .then(res => res.response.groups[0].items) // tableau des restos
            .then(async res => {

                  for (let index = 0; index < res.length; index++) {
                        const id = res[index].venue.id;
                        const name = res[index].venue.name;
                        const location = {
                              lat: res[index].venue.location.lat,
                              lng: res[index].venue.location.lng
                        };
                        const defaultComment = "";
                        const defaultStar = 2.5;

                        // restaurantBuilder(restaurants, id, name, location.lat, location.lng, defaultComment, defaultStar)

                        const restaurant = {
                              id: id,
                              restaurantName: name,
                              location: {
                                    lat: location.lat,
                                    lng: location.lng
                              },
                              ratings : [
                                    {
                                          stars: defaultStar,
                                          comment: defaultComment
                                    }
                              ]
                        }
                        await getAddress(restaurant);
                        await getStreetViewImg(restaurant)
                        restaurants.push(restaurant)
                  }
            })

      return restaurants
} 