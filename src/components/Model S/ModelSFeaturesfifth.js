import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import video from "../Model S/videos/Plaid-Range-Web-Desktop-8mb.mp4";

const ModelSFeaturesfifth = () => {
  return (
    <>
      <WrapContainer>
        <Left>
          <Video>
            <video src={video} autoPlay loop muted></video>
          </Video>
          <Inner>
            <One>
              <h3>405mi</h3>
              <p>
                Go anywhere with up to 405 miles of estimated range on a single
                charge
              </p>
            </One>
            <One>
              <h3>15min</h3>
              <p>
                Recharge up to 200 miles in 15 minutes at Supercharger locations{" "}
              </p>
            </One>
            <One>
              <h3>30,000+</h3>
              <p>Superchargers placed along popular routes</p>
            </One>
          </Inner>
        </Left>
        <Right>Content</Right>
      </WrapContainer>
    </>
  );
};

export default ModelSFeaturesfifth;

const WrapContainer = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
  display: flex;
`;
const Left = styled.div`
  width: 73vw;
  height: 100vh;
  border: 1px solid black;
  display: flex;
`;
const Video = styled.div`
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const Inner = styled.div`
  display: flex;
  margin: auto;
  justufy-content: center;
  align-items: center;
  width: 73vw;
  border: 1px solid black;
  position: absolute;
  top: 1000%;
`;
const One = styled.div`
  width: 300px;
  border: 1px solid black;
  margin: auto;
  h3,
  p {
    color: white;
  }
`;

const Right = styled.div`
  width: 27vw;
  height: 100vh;
  border: 1px solid blue;
`;
