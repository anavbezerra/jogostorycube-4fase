import React, { useState } from "react";
import './App.css';

const images = [
  "🌞", "🦄", "✈️", "🍎", // Emojis para Story Cubes
];

function App() {
  const [currentImage, setCurrentImage] = useState(null);
  const [imageCounter, setImageCounter] = useState(0);

  // Função para gerar uma imagem aleatória
  const generateRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
    setImageCounter(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      <h1>Story Cube</h1>
      
      <div className="image-container">
        {currentImage && <div className="image-box">{currentImage}</div>}
      </div>

      {/* Imagem como botão */}
      <button onClick={generateRandomImage}>
        {}Clique aqui
      </button>
      

      <div className="counter">
        <p>Imagens geradas: {imageCounter}</p>
      </div>
    </div>
  );
}

export default App;



