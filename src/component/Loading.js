import React from 'react';

import ReactLoading from 'react-loading';

import logo from '../image/eatou-yellow.png';

const Loading = () => (
      <div className="loading flex-col-center-center darkgrey">
            <img id="logo" src={logo} alt="Logo Eatou"/>
            <h2>Nous recherchons les meilleurs restos à proximité...</h2>
            <ReactLoading type="bars" color="#FFC400"/>
      </div>
)


export default Loading;

