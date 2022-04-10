import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const ModelSFeaturesfifth = () => {
  return (
    <>
      <WrapContainer>
        <Left>
          <Image>
          </Image>
          <FirstIndicator>
          <Fade bottom>
              Side Impact Protection
          </Fade>
          </FirstIndicator>
          <SecondIndicator>
          <Fade bottom>
              Front Impact Protection
          </Fade>
          </SecondIndicator>
          <ThirdIndicator>
          <Fade bottom>
              Very Low Rollover Risk
          </Fade>
          </ThirdIndicator>
        </Left>
        <Right>
          <Upper>
            <Div>
              <Fade bottom>
                <p>Safety</p>
              </Fade>
              <Fade bottom>
                <h2>High Impact Protection</h2>
              </Fade>
              <Fade bottom>
                <span>
                  Model S is built from the ground up as an electric vehicle,
                  with a high-strength architecture and floor-mounted battery
                  pack for incredible occupant protection and low rollover risk.
                  Every new Model S includes Tesla’s latest active safety
                  features, such as Automatic Emergency Braking, at no extra
                  cost.
                </span>
              </Fade>
              <Button2>ORDER NOW</Button2>
            </Div>
          </Upper>
          <Lower>
            <Div2>
              <Fade bottom>
                <span>
                  Model S is built from the ground up as an electric vehicle,
                  with a high-strength architecture and floor-mounted battery
                  pack for incredible occupant protection and low rollover risk.
                  Every new Model S includes Tesla’s latest active safety
                  features, such as Automatic Emergency Braking, at no extra
                  cost.
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
  flex-direction: row-reverse;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 73vw;
  height: 100vh;
//   border: 1px solid black;
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
const Image = styled.div`
  width: 73vw;
  height: 100vh;
//   border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("images/MS-Safety-Hero-Desktop.jfif");
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
const FirstIndicator = styled.div`
//   border: 1px solid black;
  border-left: 3.5px solid black;
  position: absolute;
  right: 0;
  top: 7.5%;
  height: 20%;
  width: 55%;
  display: flex;
  justify-content: flex-start;
`;
const SecondIndicator = styled.div`
//   border: 1px solid black;
  border-left: 3.5px solid black;
  position: absolute;
  right: 0;
  top: 19%;
  height: 35%;
  width: 78%;
  display: flex;
  justify-content: flex-start;
`;
const ThirdIndicator = styled.div`
//   border: 1px solid black;
  border-left: 3.5px solid black;
  position: absolute;
  right: 0;
  bottom: 13%;
  height: 25%;
  width: 51%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end
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
