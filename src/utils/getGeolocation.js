import { GOOGLE_MAP_KEY } from '../config';

export const getGeolocation = () => fetch(`https://cors-anywhere.herokuapp.com/https://www.googleapis.com/geolocation/v1/geolocate?key=${GOOGLE_MAP_KEY}`, { method : 'GET', headers : { 'Origin': `https://www.googleapis.com/geolocation/v1/geolocate?key=${GOOGLE_MAP_KEY}` }})
      .then(res => res.json())
      .then(datas => console.log(datas));
