import React from 'react';
import './App.css';
import Banner from './Banner';


function App() {
  return (
    
    <div className="App"
     style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url('https://wallpaperaccess.com/full/367158.jpg')`,
            backgroundPosition: '50% 50%'
        }}
        >
        <Banner /> 
    </div>
  );
}

export default App;
