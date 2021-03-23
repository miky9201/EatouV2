import { FOURSQUARE_CLIENT_ID } from '../config';
import { FOURSQUARE_CLIENT_SECRET } from '../config';


// export const getAddress = item => fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${item.location.lat},${item.location.lng}&key=${GOOGLE_MAP_KEY}`)
//     .then(res => res.json())
//     .then(res => console.log(res));

    export const getFoursquareClient = currentPosition => fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${FOURSQUARE_CLIENT_ID}&client_secret=${FOURSQUARE_CLIENT_SECRET}&v=20180323&limit=10&radius=500&ll=${currentPosition.lat},${currentPosition.lng}&query=restaurant`)
    .then(res => res.json())
    .then(res => res.response.groups[0].items) // tableau des restos
    .then(res => {
            const restaurants = [];
            for (let index = 0; index < res.length; index++) {
                  restaurants.push(res[index].venue.name)
            } 
            console.log(restaurants) 
      }) 