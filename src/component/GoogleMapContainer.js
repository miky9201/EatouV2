import React, { useState, useCallback, useContext, useEffect } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import icon from '../image/eatou-favicon.png';
import { GOOGLE_MAP_KEY } from '../config';

import { FilterContext } from '../context/FilterContext';
import { GoogleMapBoundsContext } from '../context/GoogleMapBoundsContext';
import { ModalContext } from '../context/ModalContext';
import { ClickedLatLngContext } from '../context/ClickedLatLngContext';
import { RestaurantListContext } from '../context/RestaurantListContext';
import { CurrentPositionContext } from '../context/CurrentPositionContext';

import Modal from './Modal';

import { isRestaurantAverageMoreThanFilterValue } from '../utils/isRestaurantAverageMoreThanFilterValue';
import { getFoursquarePlaces } from '../utils/getFoursquarePlaces';




const GoogleMapContainer = () => {
      // eslint-disable-next-line
      const [ mapBoundsValue, setMapBoundsValue ]  = useContext(GoogleMapBoundsContext);
      const [ filterValue ] = useContext(FilterContext);
      const [ modalStateDisplayed, changeModalStateDisplayed ] = useContext(ModalContext);
      const [clickedLatLng, setClickedLatLng] = useContext(ClickedLatLngContext);
      const [restaurantList, setRestaurantList ] = useContext(RestaurantListContext);
      const [currentPosition, setCurrentPosition] = useContext(CurrentPositionContext);

      const [ selected, setSelected ] = useState({});
      const [map, setMap] = useState(null); // state qui contient les données de la "map"
            
      const containerStyle = {
            width: '100%',
            height: '100%'
      };

      const onSelect = item => {
            setSelected(item);
      } 

      
      const onLoad = useCallback(map => {
            const success = async position => {
                  const currentPosition = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                  }
                  setCurrentPosition(currentPosition);
      
                  // call HTTP pour récupérer les restos
                  const foursquareRestaurants = await getFoursquarePlaces(currentPosition)
                  const restos = Array.from(restaurantList)
                  foursquareRestaurants.forEach(resto => {
                        restos.push(resto)
                  })
                  setRestaurantList(restos)
            }

            setMap(map);
            navigator.geolocation.getCurrentPosition(success);
      }, [restaurantList, setCurrentPosition, setRestaurantList]);

      const getMapBounds = () => {
            if (map && map.getBounds()) { 
                  //console.log(map.getBounds()) 
                  setMapBoundsValue({ 
                         n: map.getBounds().Ta.i, 
                         s: map.getBounds().Ta.g, 
                         e: map.getBounds().La.i, 
                         o: map.getBounds().La.g 
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
            console.log("++++++")
            console.log(restaurantList)
            console.log("++++++")
      }, [restaurantList])

      console.log("======")
            console.log(restaurantList)
            console.log("======")

      return (
            <LoadScript
                  googleMapsApiKey={GOOGLE_MAP_KEY}
            >
                  <GoogleMap
                  onLoad={onLoad}
                  mapContainerStyle={containerStyle}
                  center={currentPosition}
                  zoom={14}
                  onBoundsChanged={getMapBounds}
                  onClick={addRestaurant}
                  //onRightClick={test}
                  >     
                        {     
                              restaurantList.map(item => isRestaurantAverageMoreThanFilterValue(item, filterValue) ?
                                    <Marker key={item.id} position={item.location} onClick={() => onSelect(item)}/> 
                                    : null
                              )
                        } 
                        {               
                              selected.location && (
                                    <InfoWindow 
                                          position={selected.location} 
                                          clickable={true} 
                                          onCloseClick={() => setSelected({})}
                                    >
                                          <div>
                                                <h2>{selected.restaurantName}</h2>
                                                <img width="300px" src={selected.streetview} alt="restaurant"/>
                                                <p>{selected.address}</p>
                                                <h4>Commentaires :</h4> 
                                                {selected.ratings.map((item, i) => <p key={i}>{item.comment}</p>)}
                                          </div>
                                    </InfoWindow>
                              )
                        }
                        {
                              currentPosition && ( 
                                    <Marker position={currentPosition} icon={icon}/>
                              ) 
                        }
                  </GoogleMap>
                  <Modal clickedLatLng={clickedLatLng} />
            </LoadScript>
      )    
}

export default GoogleMapContainer;