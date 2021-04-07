import { getAddress } from './getAddress';
import { getStreetViewImg } from './getStreetViewImg'; 

export const restaurantBuilder = async (arrOfRestaurants, id, name, lat, lng, star, comment) => {
      const restaurant = {
            id: id,
            restaurantName: name,
            location: {
                  lat: lat,
                  lng: lng
            },
            ratings : [
                  {
                        stars: star,
                        comment: comment
                  }
            ]
      }
      await getAddress(restaurant);
      await getStreetViewImg(restaurant)
      arrOfRestaurants.push(restaurant)
}