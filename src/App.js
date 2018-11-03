import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const URI = 'http://localhost:8000';

  useEffect(() => {
    axios.get(URI + '/api/pieces').then((res) => {
      console.log('res', res.data);
    });
  });

  return (
    <div className="App">
      Connection to API.
    </div>
  );
}

export default App;
