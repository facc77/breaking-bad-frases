import React, { useState, useEffect } from "react";
import Frase from "./components/Frase";
import styled from "@emotion/styled";

function App() {
  //state de frases
  const [frase, guardarFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch("https://breakingbadapi.com/api/quote/random");
    const frase = await api.json();
    guardarFrase(frase[0]);
  };

  //Cargar una frase

  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Contenedor>
      <Frase frase={frase} />
      <Boton onClick={consultarAPI}>Obtener frase</Boton>
    </Contenedor>
  );
}

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 2rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

export default App;
