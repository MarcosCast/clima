//import React from 'react';
//import logo from './logo.svg';
import './App.scss';

function App() {
  /* API Key - 543e203878f91a37456c44cbf6cd7197 */ 
  //Aparentemente os ícones gerados em html, n funcionam dentro do react
  return (
    <div className="App">
     <div className="center">
      <div className="container">
        <div className="search-box">
          <i className="fa-solid fa-location-dot">Img Localização</i>
          <input type="text" placeholder="Digite sua cidade" />
          <button className="fa-solid fa-magnifying-g">Img Pesquisar</button>
        </div>
        <div className="erro-404"></div>
          <i className="img-404">Inserir imagem de erro</i>
          <p>Putz, Localização Invalida!</p>
      </div>

      <div className="weather-box">
        <img src="" alt="" />
        <p className="temperatura"></p>
        <p className="desc"></p>
      </div>

      <div className="weater-detalhes">
        <div className="umidade">
          <i className="fa-solid fa-water">Img de Umidade</i>
          <div className="text">
            <span></span>
            <p>Umidade</p>
          </div>
        </div>
  
        <div className="vento">
          <i className="fa-solid fa-wind">Img de vento</i>
          <div className="text">
            <span></span>
            <p>Velocidade do Vento</p>
          </div>
        </div>
      </div>

      

     </div>   

     <script></script> 
  </div>
  );
}

export default App;
