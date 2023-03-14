import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
//import './App.scss';


function App() {
  const [location, setLocation] = useState(false);

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition((position)=> {
      console.log(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, [])

  /* API Key - 543e203878f91a37456c44cbf6cd7197 */ 
  return (
    <Fragment>
      <h3>Clima (Ex)</h3>
      <hr />
      <ul>
        <li>Temperatura atual: aº</li>
        <li>Temperatura máxima: aº</li>
        <li>Temperatura mínima: aº</li>
        <li>Pressão: a hpa</li>
        <li>Umidade: a%</li>
      </ul>
    </Fragment>  
  );
}

export default App;
