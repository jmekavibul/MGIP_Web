import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '65%',
  height: '500px',
  borderRadius: '20px'
};

const center = {
  lat: 38.80388,
  lng: -77.043918
};

const uspto = {
  lat: 38.80139,
  lng: -77.0640639171357
};
const infoBoxStyle = {
    background: 'white',
    border: '1px solid black',
    padding: '5px',
    borderRadius: '8px',
    position: 'absolute',
    bottom: '150%', // Adjust these values as needed
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10
  };
function GoogleMapComp() {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [markerIcon, setMarkerIcon] = useState(null);
  const [showInfoBox, setShowInfoBox] = useState({ MGIP: false, USPTO: false });

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBkUqTWrqUzv16mdBfOzNvAXAUs9YdCSso", // Replace with your actual API key
    libraries: ['places']
  });

  console.log(showInfoBox)
  useEffect(() => {
    if (isLoaded) {
      setMarkerIcon({
        url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        scaledSize: new window.google.maps.Size(42, 42),
      });

      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route({
        origin: center,
        destination: uspto,
        travelMode: window.google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirectionsResponse(result);
        } else {
          console.error(`error fetching directions: ${status}`);
        }
      });
    }
  }, [isLoaded]);

  const toggleInfoBox = (marker) => {
    setShowInfoBox(prevState => ({ ...prevState, [marker]: !prevState[marker] }));
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
    >
      {directionsResponse && (
        <DirectionsRenderer
          directions={directionsResponse}
          options={{ suppressMarkers: true }}
        />
      )}

      {markerIcon && (
        <Marker
          position={center}
          icon={markerIcon}
          title="MGIP"
          onClick={() => toggleInfoBox('MGIP')}
        >
          {showInfoBox.MGIP && (
            <div style={infoBoxStyle}>
                {console.log("supposedly here")}
              <h1>MGIP</h1>
              <p>Info about MGIP</p>
              <button onClick={() => toggleInfoBox('MGIP')}>Close</button>
            </div>
          )}
        </Marker>
      )}

      {markerIcon && (
        <Marker
          position={uspto}
          icon={markerIcon}
          title="USPTO"
          onClick={() => toggleInfoBox('USPTO')}
        >
          {showInfoBox.USPTO && (
            <div >
              <h1>USPTO</h1>
              <p>Info about USPTO</p>
              <button onClick={() => toggleInfoBox('USPTO')}>Close</button>
            </div>
          )}
        </Marker>
      )}
    </GoogleMap>
  ) : <div>Loading...</div>;
}

export default GoogleMapComp;
