import { GOOGLE_MAP_KEY } from '../config';

export const getAddress = item => fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${item.location.lat},${item.location.lng}&key=${GOOGLE_MAP_KEY}`)
    .then(res => res.json())
    .then(res => item.address = res.results[0].formatted_address);
