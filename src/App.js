import './App.css';
import React, { useState }from 'react';
import Header from './component/Header';
import Filter from './component/Filter';
import RestaurantDisplayer from './component/RestaurantDisplayer';
import GoogleMapContainer from './component/GoogleMapContainer';

import { FilterProvider } from './FilterContext/FilterContext';
import { GoogleMapBoundsProvider } from './GoogleMapBoundsContext/GoogleMapBoundsContext';
import { CommentProvider } from './CommentContext/CommentContext';
import { StarsProvider } from './StarsContext/StarsContext';
import { ModalProvider } from './ModalContext/ModalContext';
import { ClickedLatLngProvider } from './ClickedLatLngContext/ClickedLatLngContext';
import { RestaurantListProvider } from './RestaurantListContext/RestaurantListContext';

function App() {
      const [ currentPosition, setCurrentPosition ] = useState(); // state qui indique la geolocalisation
      return (
            <RestaurantListProvider>
                  <ClickedLatLngProvider>
                        <ModalProvider>
                              <StarsProvider>
                                    <CommentProvider>      
                                          <FilterProvider>
                                                <GoogleMapBoundsProvider>
                                                      <div className="app">
                                                            <div className="flex-col-top-center">
                                                                  <Header />
                                                                  <div className="flex-row-center-top full-container">
                                                                        <div className="display-container">
                                                                              <div className="flex-col-center-center title">
                                                                                    <h2>Restaurants à proximité</h2>
                                                                                    <Filter />
                                                                                    <RestaurantDisplayer currentPosition={currentPosition}/>
                                                                              </div>
                                                                        </div>
                                                                        <div className="map-container border">
                                                                              <GoogleMapContainer currentPosition={currentPosition} setCurrentPosition={setCurrentPosition}/>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </GoogleMapBoundsProvider>
                                          </FilterProvider>
                                    </CommentProvider>
                              </StarsProvider>
                        </ModalProvider>
                  </ClickedLatLngProvider>
            </RestaurantListProvider>
      );
}

export default App;
