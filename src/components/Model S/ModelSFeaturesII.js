import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const ModelSFeaturesII = () => {
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
            <Inner>
              <p>Plaid</p>
              <h2>Beyond Ludicrous</h2>
              <Button>ORDER NOW</Button>
            </Inner>
          </LeftPart>
          <RightPart>
              <Under>
                  <p>Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation.</p>
              </Under>
          </RightPart>
        </RestPart>
      </WrapContainer>
    </>
  );
};

export default ModelSFeaturesII;

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
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("images/MS-Performance-Hero-Desktop.jpg");
`;
const Wrapper = styled.div`
  display: flex;
`;
const One = styled.div`
  h2,
  p {
    color: white;
  }
  padding: 55px;
  justify-content: space-between;
`;
const RestPart = styled.div`
  width: 100vw;
  height: 29vh;
  border: 1px solid blue;
  display: flex;
  @media (max-width: 768px)
  {
      flex-direction: column;
  }
`;
const LeftPart = styled.div`
  border: 1px solid green;
  width: 42%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px)
  {
      width: 100vw;
  }
`;
const Inner = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  p{
      font-size: 20px;
      color: grey;
  }
`;
const Button = styled.div`
  width: 78%;
  border: 3px solid black;
  border-radius: 50px;
  padding: 5px;
`;
const RightPart = styled.div`
  border: 1px solid blue;
  width: 58%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Under = styled.div`
border: 1px solid blue;
  
`;
