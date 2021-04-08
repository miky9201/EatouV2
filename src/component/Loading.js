import React from 'react';

import ReactLoading from 'react-loading';

const Loading = () => (
      <div className="loading flex-col-center-center">
            <h2>Nous cherchons les meilleurs restos à proximité...</h2>
            <ReactLoading type="balls" color="#FFC400"/>
      </div>
)


export default Loading;

