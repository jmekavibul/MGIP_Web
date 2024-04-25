import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React from "react";

const containerStyle = {
  width: '1500px',
  height: '350px'
};

const center = {
  lat: 38.80325,
  lng: -77.04836
};

function Contact() {
  // Memoize the loader options
  const loaderOptions = React.useMemo(() => ({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBkUqTWrqUzv16mdBfOzNvAXAUs9YdCSso",
    libraries: ['places'] // Specify needed libraries here
  }), []);

  const { isLoaded } = useJsApiLoader(loaderOptions);
    
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {

    setMap(map);
  }, [center]);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  const zoomNumber = 15;
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoomNumber}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. can be placed here */}
    </GoogleMap>
  ) : <div>Loading...</div>;  // Added a loading placeholder for better UX
}

export default Contact;
