import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const ModelXCarHome = () => {
  return (
    <>
      <Container>
          <Wrap1>
            <h1>Model X</h1>
            <p>Plaid</p>
          </Wrap1>
        <Fade bottom>
          <Wrap2>
            <One>
              <h2>333 mi</h2>
              <p>Range(EPA est.)</p>
            </One>
            <One>
              <h2>2.5 s</h2>
              <p>0-60 mph*</p>
            </One>
            <One>
              <h2>9.9 s</h2>
              <p>1/4 mile</p>
            </One>
            <One>
              <h2>1,020 hp</h2>
              <p>Peak Power</p>
            </One>
            <Button>ORDER NOW</Button>
          </Wrap2>
        </Fade>
        <Button2>ORDER NOW</Button2>
      </Container>
    </>
  );
};

export default ModelXCarHome;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../images/Model-X-Main-Hero-Desktop-LHD.jfif");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const One = styled.div`
  margin: 50px;
  h2 {
    color: white;
  }
  p {
    color: white;
  }
  @media (max-width: 768px) {
    margin: 10px;
    font-size: 0.9rem;
  }
`;
const Wrap1 = styled.div`
  padding-top: 15vh;
  h1 {
    font-size: 2.8rem;
    color: black;
  }
`;
const Wrap2 = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: -50%;
  }
`;
const Button = styled.div`
  background: transparent;
  color: white;
  border: 3px solid white;
  border-radius: 50px;
  padding: 8px;
  width: 15%;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Button2 = styled.div`
  background: transparent;
  color: white;
  border: 3px solid white;
  border-radius: 50px;
  padding: 8px;
  width: 15%;
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: inline;
    width: 80%;
    position: relative;
    left: 12%;
    margin-bottom: 75px;
  }
`;
