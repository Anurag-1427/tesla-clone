import React from "react";
import styled from "styled-components";

const ModelSInterior = () => {
  return (
    <>
      <WrapContainer>
        <h1>Interior of the Future</h1>
        <img src="images/new-interior.jpg" alt="tesla-car-interior" />
      </WrapContainer>
    </>
  );
};

export default ModelSInterior;

const WrapContainer = styled.div`
  width: 100vw;
  height: 120vh;
  background-color: black;
  box-shadow: 1px 0 500px black;
  h1{
      color: white;
      padding: 60px;
      font-size: 2rem;
  }
  img {
    margin-top: 25px;
    height: 100vh;
    width: 100vw;
    @media (max-width: 768px) {
      width: 100vw;
      height: 85vh;
    }
`;

