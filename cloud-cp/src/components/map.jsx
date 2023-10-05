import React from 'react'


import './map.css'

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 35.827236,
      lng: 10.624079
    },
    zoom: 11
  };

  return (
    
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={35.827236} 
          lng={10.624079}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
