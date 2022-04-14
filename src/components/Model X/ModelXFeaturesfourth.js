import React from 'react'
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const ModelXFeaturesfourth = () => {
  return (
    <>
        <WrapContainer>
        <Under>
          <Two>
            <TwoText>
              <CenterText>
                <Fade bottom>
                  <h4>New Wheels and Tires</h4>
                </Fade>
                <Fade bottom>
                  <p>
                  New performance tires deliver better handling and ride quality with lower rolling resistance and are paired with new aerodynamic wheels for an updated look.
                  </p>
                </Fade>
              </CenterText>
            </TwoText>
            <TwoImg>
              <Fade bottom>
                <img src="images/Model-X-Exterior-Grid-A-Desktop-Global.jfif" alt="" />
              </Fade>
            </TwoImg>
          </Two>
          <One>
            <OneImg>
              <Fade bottom>
                <img src="images/Model-X-Exterior-Grid-B-Desktop-Global.jfif" alt="" />
              </Fade>
            </OneImg>
            <OneText>
              <CenterText>
                <Fade bottom>
                  <h4>Optimized Aerodynamics</h4>
                </Fade>
                <Fade bottom>
                  <p>
                  Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.
                  </p>
                </Fade>
              </CenterText>
            </OneText>
          </One>
          <Two>
            <TwoText>
              <CenterText>
                <Fade bottom>
                  <h4>Refined Styling</h4>
                </Fade>
                <Fade bottom>
                  <p>
                  Exterior design combines an iconic look with elegant proportions.
                  </p>
                </Fade>
              </CenterText>
            </TwoText>
            <TwoImg>
              <Fade bottom>
                <img src="images/Model-X-Exterior-Grid-C-Desktop-Global.jfif" alt="" />
              </Fade>
            </TwoImg>
          </Two>
        </Under>
      </WrapContainer>
    </>
  )
}

export default ModelXFeaturesfourth


const WrapContainer = styled.div`
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