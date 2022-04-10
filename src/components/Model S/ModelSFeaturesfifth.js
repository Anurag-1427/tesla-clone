import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import video from "../Model S/assets/Plaid-Range-Web-Desktop-8mb.mp4";

const ModelSFeaturesfifth = () => {
  return (
    <>
      <WrapContainer>
        <Left>
          <Video>
            <video src={video} autoPlay loop muted></video>
          </Video>
          <Inner>
            <Fade bottom>
              <One>
                <h3>405mi</h3>
                <p>
                  Go anywhere with up to 405 miles of estimated range on a
                  single charge
                </p>
              </One>
            </Fade>
            <Fade bottom>
              <One>
                <h3>15min</h3>
                <p>
                  Recharge up to 200 miles in 15 minutes at Supercharger
                  locations{" "}
                </p>
              </One>
            </Fade>
            <Fade bottom>
              <One>
                <h3>30,000+</h3>
                <p>Superchargers placed along popular routes</p>
              </One>
            </Fade>
          </Inner>
        </Left>
        <Right>
          <Upper>
            <Div>
              <Fade bottom>
                <p>Range</p>
              </Fade>
              <Fade bottom>
                <h2>Go Anywhere</h2>
              </Fade>
              <Fade bottom>
                <span>
                  Travel farther on a single charge than any other electric
                  vehicle—and keep going with access to 30,000+ Superchargers
                  globally. By combining up to 405 miles of estimated range with
                  Tesla fast charging technology, you’ll spend less time
                  charging and even more time on the road.
                </span>
              </Fade>
              <Button2>ORDER NOW</Button2>
            </Div>
          </Upper>
          <Lower>
            <Div2>
            <Fade bottom>
              <span>
                Travel farther on a single charge than any other electric
                vehicle—and keep going with access to 30,000+ Superchargers
                globally. By combining up to 405 miles of estimated range with
                Tesla fast charging technology, you’ll spend less time charging
                and even more time on the road.
              </span>
              </Fade>
              <Fade bottom>
              <Button>ORDER NOW</Button>
              </Fade>
            </Div2>
          </Lower>
        </Right>
      </WrapContainer>
    </>
  );
};

export default ModelSFeaturesfifth;

const WrapContainer = styled.div`
  width: 100vw;
  height: 100vh;
  // border: 1px solid black;
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 73vw;
  height: 100vh;
  // border: 1px solid black;
  position: relative;
  @media (max-width: 1200px) {
    width: 100vw;
    height: 66.5vh;
  }
  @media (max-width: 900px) {
    width: 100vw;
    height: 53vh;
  }
  @media (max-width: 500px) {
    width: 100vw;
    height: 60vh;
  }
`;
const Video = styled.div`
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    @media (max-width: 1200px) {
      width: 100vw;
      height: 66.5vh;
    }
    @media (max-width: 900px) {
      width: 100vw;
      height: 53vh;
    }
    @media (max-width: 500px) {
      width: 100vw;
      height: 60vh;
    }
  }
`;
const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 73vw;
  // border: 1px solid black;
  position: absolute;
  bottom: 5%;
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const One = styled.div`
  width: 200px;
  // border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3,
  p {
    color: white;
  }
  @media (max-width: 500px) {
    font-size: 7px;
    width: 50%;
    h3 {
      font-size: 14px;
    }
  }
`;
const Right = styled.div`
  width: 30vw;
  height: 100vh;
  // border: 1px solid blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1200px) {
    width: 100vw;
    height: 34.5vh;
    flex-direction: row;
  }
  @media (max-width: 900px) {
    width: 100vw;
    height: 47vh;
  }
  @media (max-width: 500px) {
    width: 100vw;
    height: 40vh;
  }
`;
const Upper = styled.div`
  // border: 1px solid orange;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  @media (max-width: 1200px) {
    width: 40%;
    height: 100%;
    span{
      display: none;
    }
    p{
      margin-bottom: 1px;
    }
    @media (max-width: 900px) {
      width: 100%; 
      span{
        display: inline;
      }
    }
  // }
`;
const Div = styled.div`
  // border: 1px solid green;
  width: 100%;
  padding: 7%;
  p {
    font-size: 20px;
  }
  h2 {
    color: #000;
    font-weight: 800;
  }

  @media (max-width: 1200px) {
    padding: 0;
    width: 65%;
    p {
      font-size: 18px;
      color: grey;
    }
    @media (max-width: 900px) {
      width: 90%;
      height: 70%;
      p {
        color: grey;
      }
    }
    @media (max-width: 500px) {
      p {
        font-size: 15px;
        color: grey;
      }
      h2 {
        font-size: 18px;
      }
    }
  }
`;
const Lower = styled.div`
  // border: 1px solid orange;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 100%;
  span {
    display: none;
  }
  @media (max-width: 1200px) {
    width: 60%;
    height: 100%;
    span{
      display: inline;
      color: grey;

    }
    @media (max-width: 900px) {
      display: none;
    }
`;
const Div2 = styled.div`
  // border: 1px solid black;
  width: 80%;
`;
const Button = styled.div`
  width: 60%;
  border: 3px solid #000;
  color: #000;
  text-align: center;
  border-radius: 50px;
  padding: 5px;
  @media (max-width: 1200px) {
    display: none;
  }
`;
const Button2 = styled.div`
  width: 78%;
  margin-top: 15px;
  border: 3px solid #000;
  color: #000;
  text-align: center;
  border-radius: 50px;
  padding: 5px;
  @media (max-width: 5000px) {
    display: none;
  }
  @media (max-width: 1200px) {
    display: inline-block;
    width: 100%;
  }
  @media (max-width: 900px) {
    display: block;
    width: 30%;
  }
  @media (max-width: 600px) {
    display: block;
    width: 100%;
  }
`;
