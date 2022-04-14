import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const ModelXFeatures = () => {
  return (
    <>
      <ThirdWrap>
        <Under>
          <One>
            <OneImg>
              <Fade bottom>
                <img src="images/MS-Interior-Grid-A-Desktop.jpg" alt="" />
              </Fade>
            </OneImg>
            <OneText>
              <CenterText>
                <Fade bottom>
                  <h4>Wireless Gaming</h4>
                </Fade>
                <Fade bottom>
                  <p>
                  Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.
                  </p>
                </Fade>
              </CenterText>
            </OneText>
          </One>
          <Two>
            <TwoText>
              <CenterText>
                <Fade bottom>
                  <h4>Stay Connected</h4>
                </Fade>
                <Fade bottom>
                  <p>
                    Multi-device Bluetooth, wireless and USB-C charging for
                    every passenger, with enough power to fast-charge your
                    tablets and laptop.
                  </p>
                </Fade>
              </CenterText>
            </TwoText>
            <TwoImg>
              <Fade bottom>
                <img src="images/connected.jpg" alt="" />
              </Fade>
            </TwoImg>
          </Two>
          <One>
            <OneImg>
              <Fade bottom>
                <img src="images/audio.jpg" alt="" />
              </Fade>
            </OneImg>
            <OneText>
              <CenterText>
                <Fade bottom>
                  <h4>Your Best Audio System</h4>
                </Fade>
                <Fade bottom>
                  <p>
                    A 22-speaker, 960-watt audio system with active noise
                    canceling offers the best listening experience at home or on
                    the road.
                  </p>
                </Fade>
              </CenterText>
            </OneText>
          </One>
        </Under>
      </ThirdWrap>
    </>
  );
};

export default ModelXFeatures;

const ThirdWrap = styled.div`
  width: 100vw;
  background-color: black;
  /* border: 2px solid white; */
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Under = styled.div`
  /* border: 1px solid wheat; */
  width: 75vw;
  margin-top: 150px;
  margin-bottom: 35px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100vw;
  }
`;
const One = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    position: relative;
    left: 0;
  }
`;
const OneImg = styled.div`
  width: 50%;
  /* border: 1px solid yellow; */
  img {
    width: 100%;
    height: 350px;
  }
  @media (max-width: 768px) {
    img {
      width: 100vw;
    }
  }
`;
const OneText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 50%;
  /* border: 1px solid yellow; */
  @media (max-width: 768px) {
    width: 100vw;
  }
`;
const CenterText = styled.div`
  /* border: 5px solid white; */
  width: 80%;
  padding: 15px;
  h4,
  p {
    color: white;
    text-align: left;
  }
  h4 {
    font-size: 15px;
    font-weight: 700;
    line-height: 1px;
    margin-bottom: 20px;
  }
  p {
    font-size: 15px;
    font-weight: 500;
  }
  @media (max-width: 768px) {
    padding: 25px;
    width: 100vw;
    padding-top: 40px;
  }
`;
const Two = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    position: relative;
    left: 0;
  }
`;
const TwoImg = styled.div`
  width: 50%;
  /* border: 1px solid yellow; */
  img {
    width: 100%;
    height: 350px;
  }
  @media (max-width: 768px) {
    img {
      width: 100vw;
    }
  }
`;
const TwoText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 50%;
  /* border: 1px solid yellow; */
  @media (max-width: 768px) {
    width: 100vw;
  }
`;
