import { GOOGLE_MAP_KEY } from '../config';

export const getStreetViewImg = item => fetch(`https://maps.googleapis.com/maps/api/streetview?size=500x400&location=${item.address}&key=${GOOGLE_MAP_KEY}`)
    .then(res => item.streetview = res.url);
