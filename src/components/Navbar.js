import React from 'react';
import airbnbLogo from '../images/airbnb-logo.png';

const Navbar = () => {
  return <div>
      <nav>
      <img src={airbnbLogo} alt="Airbnb Logo" />
      </nav>
  </div>;
};

export default Navbar;