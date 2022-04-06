import React from 'react'
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const   ModleSFeaturesIII = () => {
  return (
    <>
        <WrapContainer>
        <ImgPart>
          <Wrapper>
            <Fade bottom>
              <One>
                <h2>1,020hp</h2>
                <p>Peak Power</p>
              </One>
            </Fade>
            <Fade bottom>
              <One>
                <h2>9.23s</h2>
                <p>@155 mph 1/4 mile</p>
              </One>
            </Fade>
            <Fade bottom>
              <One>
                <h2>1.99s</h2>
                <p>0-60 mph*</p>
              </One>
            </Fade>
          </Wrapper>
        </ImgPart>
        <RestPart>
          <LeftPart>
          <Fade bottom>
            <Inner>
              <p>Plaid</p>
              <h2>Beyond Ludicrous</h2>
              <span>
                Model S Plaid has the quickest acceleration of any vehicle in
                production. Updated battery architecture for all Model S trims
                enables back-to-back track runs without performance degradation.
              </span>
              <Button>ORDER NOW</Button>
            </Inner>
              </Fade>
          </LeftPart>
          <RightPart>
          <Fade bottom>
            <Under>
              <p>
                Model S Plaid has the quickest acceleration of any vehicle in
                production. Updated battery architecture for all Model S trims
                enables back-to-back track runs without performance degradation.
              </p>
            </Under>
            </Fade>
          </RightPart>
        </RestPart>
      </WrapContainer>
    </>
  )
}

export default ModleSFeaturesIII

const WrapContainer = styled.div`
  width: 100vw;
  height: 100vh;
  //   background-color: grey;
  display: flex;
  flex-direction: column;
`;
const ImgPart = styled.div`
  width: 100vw;
  height: 71vh;
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("images/MS-Exterior-Hero-Desktop.jfif");
  @media (max-width: 768px)
  {
    height: 52vh;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  // border: 1px solid white;
  @media (max-width: 540px)
  {
    position: relative;
    top: 92px;
  }
`;
const One = styled.div`
  // border: 1px solid white;
  h2,
  p {
    color: white;
  }
  padding: 25px;
  justify-content: space-between;
`;
const RestPart = styled.div`
  width: 100vw;
  height: 29vh;
  background: #000;
  // border: 1px solid blue;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 48vh;
  }
`;
const LeftPart = styled.div`
  // border: 1px solid green;
  width: 42%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100vw;
    height: 48vh;
  }
`;
const Inner = styled.div`
  // border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  p {
    font-size: 20px;
    color: #fff;
  }
  span{
    display: none;
  }
  h2 {
    color: #fff;
    font-weight: 800;
  }
  @media (max-width: 768px)
  {
    width: 90vw;
    span{
      display: inline;
      color: white;
      margin-top: 8px;
      margin-bottom: 8px;
    }
    p {
      font-size: 18px;
    }
    h2{
      margin-top: -15px;
    }
    text-align: start;
    position: relative;
    left: 2%;
    bottom: 5%;

  }
`;
const Button = styled.div`
  width: 78%;
  border: 3px solid #fff;
  color: #fff;
  border-radius: 50px;
  padding: 5px;
  @media (max-width: 768px)
  {
    width: 28%;
    text-align: center;
    margin-top: 15px;
    font-size: 14px;
    font-weight: 500;
  }
  @media (max-width: 530px){
    width: 100%;
  }
  &:hover{
    background: #fff;
    color: #000;
    transition: 0.7s;
  }
`;
const RightPart = styled.div`
  // border: 1px solid blue;
  width: 58%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #8d8f92;
  @media (max-width: 768px)
  {
    display: none;
  }
`;
const Under = styled.div`
  // border: 1px solid orange;
  width: 78%;
  position: relative;
  bottom: 5%;
  left: 5%;
  text-align: start;
  p{
    color: #fff;
  }
  @media (max-width: 768px)
  {
    p{
      display: none;
    }
  }
`;