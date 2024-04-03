import React from 'react';
import './Banner.css';

// a draggable banner that can be used to display a message or image
// bannerComponents: an array of components to be displayed in the banner
const Banner = ({ bannerComponents }) => {

  return (
    <div className="banner">
      <div className="banner__content">
        {bannerComponents.map((component, index) => (
          <div key={index} className="banner__component">
            {component}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
