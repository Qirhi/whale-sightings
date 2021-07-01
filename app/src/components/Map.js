import React from 'react';
import GoogleMapReact from 'google-map-react';
const Map=()=>{
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const center = {
            lat: 59.95,
            lng: 30.33
        };
    const zoom = 11;
    return(
    <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ 
                key: 'AIzaSyASnLGhffYBRZ60GqFHOYBSoPiHpW_kJSE',
                language:'en'
            }}
            defaultCenter={center}
            defaultZoom={zoom}
        >
            <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
            />
        </GoogleMapReact>
    </div>
    );
};
export default Map;