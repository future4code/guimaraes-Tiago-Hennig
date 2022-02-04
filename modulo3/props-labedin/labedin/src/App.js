import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';

const Vermelho = styled.h2`
  color: red;
  background-color:blue;
`


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <Vermelho>Dados pessoais</Vermelho>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/86529848?v=4"
          nome="Tiago Hennig" 
          descricao="Oi, eu sou o Tiago. Sou Analista Químico, atuando em um laboratório de análises físico-quimicas e instrumentais. Atualmente estou em processo de transição de carreira para em breve me tornar um desenvolvedor WEB Full-Stack pela Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://png.pngtree.com/png-clipart/20190515/original/pngtree-email-symbol-icon-png-image_3569789.jpg"
          titulo="Email:"
          email="tiago.hennig@hotmail.com"
          />
        <CardPequeno
          imagem="https://www.pinpng.com/pngs/m/17-175394_address-icon-png-home-symbol-for-resume-transparent.png"
          titulo="Endereço:"
          endereco="Brasil"
          />


      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Front-End Developer" 
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-5.png" 
          nome="NASA" 
          descricao="Físico-chefe." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
