import React, { useState, useCallback, useContext } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import icon from '../image/eatou-favicon.png';
import { GOOGLE_MAP_KEY } from '../config';
import { isRestaurantAverageMoreThanFilterValue } from '../utils/isRestaurantAverageMoreThanFilterValue';
import { getFoursquareClient } from '../utils/getFoursquarePlaces';

import Modal from './Modal';

import { FilterContext } from '../FilterContext/FilterContext';
import { GoogleMapBoundsContext } from '../GoogleMapBoundsContext/GoogleMapBoundsContext';
import { ModalContext } from '../ModalContext/ModalContext';
import { ClickedLatLngContext } from '../ClickedLatLngContext/ClickedLatLngContext';
import { RestaurantListContext } from '../RestaurantListContext/RestaurantListContext';



const GoogleMapContainer = () => {
      // eslint-disable-next-line
      const [ mapBoundsValue, setMapBoundsValue ]  = useContext(GoogleMapBoundsContext);
      const [ filterValue ] = useContext(FilterContext);
      const [ modalStateDisplayed, changeModalStateDisplayed ] = useContext(ModalContext);
      const [clickedLatLng, setClickedLatLng] = useContext(ClickedLatLngContext);
      const [restaurantList ] = useContext(RestaurantListContext); 

      const [ selected, setSelected ] = useState({});
      const [ currentPosition, setCurrentPosition ] = useState(); // state qui indique la geolocalisation
      const [map, setMap] = useState(null); // state qui contient les données de la "map"
            
      const containerStyle = {
            width: '100%',
            height: '100%'
      };

      const onSelect = async item => {
            setSelected(item);
      } 

      const success = position => {
            const currentPosition = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
            }
            setCurrentPosition(currentPosition);
            getFoursquareClient(currentPosition);
      }

      const onLoad = useCallback(map => {
            setMap(map);
            navigator.geolocation.getCurrentPosition(success);
      }, []);

      const getMapBounds = () => {
            if (map && map.getBounds()) { 
                  //console.log(map.getBounds()) 
                   setMapBoundsValue({ 
                         n: map.getBounds().Sa.i, 
                         s: map.getBounds().Sa.g, 
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