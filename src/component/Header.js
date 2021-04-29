import React from 'react';
import logo from '../image/eatou-yellow.png';

const Header = () => {

      return (
            <div className="header flex-col-center-center">
                  <img id="logo" src={logo} alt="Logo Eatou"/>
                  <h1>Eatou</h1>
                  <p>Bien manger partout !</p>            
            </div>
      )
}

export default Header;