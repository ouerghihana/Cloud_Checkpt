import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Map App</h1>
      </header>
      <main>
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </main>
      <footer>
        <p>© 2023 My Map App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
