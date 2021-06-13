import React from "react";
import styled from "@emotion/styled";

const ContenedorFrase = styled.div`
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
  margin-top: 10rem;

  @media (min-width: 992px) {
    margin-top: 10rem;
  }

  h2 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

const Frase = ({ frase }) => {
  return (
    <ContenedorFrase>
      <h2>{frase.quote}</h2>
      <p>{frase.author}</p>
    </ContenedorFrase>
  );
};

export default Frase;