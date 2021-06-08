import React, { useState, useCallback, useContext, useEffect } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import icon from '../image/eatou-favicon.png';
import { GOOGLE_MAP_KEY } from '../config';

import { FilterContext } from '../context/FilterContext';
import { GoogleMapBoundsContext } from '../context/GoogleMapBoundsContext';
import { ModalContext } from '../context/ModalContext';
import { LoadingContext } from '../context/LoadingContext';
import { ClickedLatLngContext } from '../context/ClickedLatLngContext';
import { RestaurantListContext } from '../context/RestaurantListContext';
import { CurrentPositionContext } from '../context/CurrentPositionContext';

import Modal from './Modal';
import Loading from './Loading';

import { isRestaurantAverageMoreThanFilterValue } from '../utils/isRestaurantAverageMoreThanFilterValue';
import { getFoursquarePlaces } from '../utils/getFoursquarePlaces';

// If geolocation does not work : Paris Center
const DEFAULT_LAT = 48.864716
const DEFAULT_LNG = 2.349014
const GOOGLE_MAP_ZOOM =  14;

const GoogleMapContainer = () => {
      // eslint-disable-next-line
      const [ mapBoundsValue, setMapBoundsValue ]  = useContext(GoogleMapBoundsContext);
      const [ filterValue ] = useContext(FilterContext);
      const [ modalStateDisplayed, changeModalStateDisplayed ] = useContext(ModalContext);
      const [ loadingStateDisplayed, changeLoadingStateDisplayed ] = useContext(LoadingContext);
      const [clickedLatLng, setClickedLatLng] = useContext(ClickedLatLngContext);
      const [restaurantList, setRestaurantList ] = useContext(RestaurantListContext);
      const [currentPosition, setCurrentPosition] = useContext(CurrentPositionContext);

      const [ selected, setSelected ] = useState({});
      const [map, setMap] = useState(null); // state containing map datas 
            
      const containerStyle = {
            width: '100%',
            height: '100%'
      };

      const onSelect = item => {
            setSelected(item);
      } 

      const onLoad = useCallback(map => {
            const mapInit = async position => {
                  const currentPosition = {
                        lat: position && position.coords ? position.coords.latitude : DEFAULT_LAT,
                        lng: position && position.coords ? position.coords.longitude : DEFAULT_LNG 
                  }
                  setCurrentPosition(currentPosition);

                  const foursquareRestaurants = await getFoursquarePlaces(currentPosition)
                  const restaurants = Array.from(restaurantList)
                  foursquareRestaurants.forEach(restaurant => {
                        restaurants.push(restaurant)
                  })
                  setRestaurantList(restaurants)
            }
            
            setMap(map);
            navigator.geolocation.getCurrentPosition(mapInit, mapInit);

      }, [restaurantList, setCurrentPosition, setRestaurantList]);
      

      const getMapBounds = () => {
            if (map && map.getBounds()) { 
                  // Sometimes GoogleMaps bounds keys change, i keep this console.log below to get the new ones.
                  console.log(map.getBounds()) 
                  setMapBoundsValue({ 
                         n: map.getBounds().oc.i, 
                         s: map.getBounds().oc.g, 
                         e: map.getBounds().Eb.i, 
                         o: map.getBounds().Eb.g 
                  });
            }          
      }

      const addRestaurant = (e) => {
            changeModalStateDisplayed(!modalStateDisplayed);
            setClickedLatLng({
                  lat: e.latLng.lat(), 
                  lng: e.latLng.lng()
            });
      }

      useEffect(() => {
            if(currentPosition !== undefined) {
                  changeLoadingStateDisplayed(false);
            }
      }, [currentPosition, changeLoadingStateDisplayed])

      return (
            <LoadScript googleMapsApiKey={GOOGLE_MAP_KEY} >              
                  <GoogleMap
                        onLoad={onLoad}
                        mapContainerStyle={containerStyle}
                        center={currentPosition}
                        zoom={GOOGLE_MAP_ZOOM}
                        onBoundsChanged={getMapBounds}
                        onClick={addRestaurant}
                  >     
                        {restaurantList.map(item => isRestaurantAverageMoreThanFilterValue(item, filterValue) ?
                              <Marker key={item.id} position={item.location} onClick={() => onSelect(item)}/> 
                              : null
                        )} 

                        {selected.location && (
                              <InfoWindow position={selected.location} clickable={true} onCloseClick={() => setSelected({})}>
                                    <div>
                                          <h2>{selected.restaurantName}</h2>
                                          <img width="300px" src={selected.streetview} alt="restaurant"/>
                                          <p>{selected.address}</p>
                                          <h4>Commentaires :</h4> 
                                          {selected.ratings.map((item, i) => <p key={i}>{item.comment}</p>)}
                                    </div>
                              </InfoWindow>
                        )}

                        {currentPosition && ( 
                              <Marker position={currentPosition} icon={icon}/>
                        )}
                        
                  </GoogleMap>
                  {loadingStateDisplayed ? <Loading /> : null}    
                  <Modal clickedLatLng={clickedLatLng} />  
            </LoadScript>
      )    
}

export default GoogleMapContainer;