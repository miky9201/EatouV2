import './App.css';
import React from 'react';

import { FilterProvider } from './context/FilterContext';
import { GoogleMapBoundsProvider } from './context/GoogleMapBoundsContext';
import { CommentProvider } from './context/CommentContext';
import { StarsProvider } from './context/StarsContext';
import { ModalProvider } from './context/ModalContext';
import { LoadingProvider } from './context/LoadingContext';
import { ClickedLatLngProvider } from './context/ClickedLatLngContext';
import { RestaurantListProvider } from './context/RestaurantListContext';
import { CurrentPositionProvider } from './context/CurrentPositionContext';

import Header from './component/Header';
import Filter from './component/Filter';
import RestaurantDisplayer from './component/RestaurantDisplayer';
import GoogleMapContainer from './component/GoogleMapContainer';

const App = () => (
            <CurrentPositionProvider>
                  <RestaurantListProvider>
                        <ClickedLatLngProvider>
                              <ModalProvider>
                                    <LoadingProvider>
                                          <StarsProvider>
                                                <CommentProvider>      
                                                      <FilterProvider>
                                                            <GoogleMapBoundsProvider>
                                                                  <div className="app">
                                                                        <div className="flex-col-top-center">
                                                                              <Header />
                                                                              <div className="full-container">
                                                                                    <div className="display-container">
                                                                                          <div className="flex-col-center-center title">
                                                                                                <h2>Restaurants ?? proximit??</h2>
                                                                                                <Filter />
                                                                                                <RestaurantDisplayer />
                                                                                          </div>
                                                                                    </div>
                                                                                    <div className="map-container border">
                                                                                          <GoogleMapContainer />
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </GoogleMapBoundsProvider>
                                                      </FilterProvider>
                                                </CommentProvider>
                                          </StarsProvider>
                                    </LoadingProvider>
                              </ModalProvider>
                        </ClickedLatLngProvider>
                  </RestaurantListProvider>
            </CurrentPositionProvider>
      )

export default App;
