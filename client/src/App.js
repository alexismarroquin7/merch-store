import React, { useState, useEffect } from 'react';
import './App.css';

const url = path => {
  return process.env.NODE_ENV === "development"
  ? `http://localhost:5000${path}`
  : path
}

function App() {
  const [ data, setData ] = useState('');

  useEffect(() => {
    fetch(url('/api'))
    .then(res => res.json())
    .then(apiData => setData(apiData.greet));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {data}
      </header>
    </div>
  );
}

export default App;
