import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

const ModelSLastlyAndFooter = () => {
  return (
    <>
      <Wrapper>
        <Left>
          <Inner>
            <Fade bottom>
              <p>Model S</p>
            </Fade>
              <Fade bottom>
            <Wrap>
                <Button>ORDER NOW</Button>
                <Button>COMPARE</Button>
            </Wrap>
              </Fade>
          </Inner>
        </Left>
        <Fade bottom>
        <Right>
          <Image />
        </Right>
        </Fade>
      </Wrapper>
      <Footer>
        <Inner2>
      <Fade bottom>
          <a href="#">Tesla &copy; 2022</a>
          <a href="#">Privacy & Legal</a>
          <a href="#">Vehicle Recalls</a>
          <a href="#">Contact</a>
          <a href="#">Careers</a>
          <a href="#">News</a>
          <a href="#">Engage</a>
          <a href="#">Locations</a>
        </Fade>
        </Inner2>
      </Footer>
    </>
  );
};

export default ModelSLastlyAndFooter;

const Wrapper = styled.div`
  width: 100vw;
  height: 95vh;
  //   border: 1px solid black;
  display: flex;
  justify-content: center;
  align-itmes: center;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 50vw;
  height: 95vh;
  //   border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100vw;
    height: 47.5vh;
  }
`;
const Inner = styled.div`
  //   border: 1px solid blue;
  width: 50%;
  p {
    font-size: 30px;
    text-align: left;
    font-weight: 700;
    margin-left: 2%;
  }
  @media (max-width: 1200px) {
    p {
      font-size: 40px;
      text-align: center;
      font-weight: 700;
      margin-left: 2%;
    }
  }
`;
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //   border: 1px solid black;
`;
const Button = styled.div`
  border: 3px solid black;
  border-radius: 50px;
  transition: 1s ease;
  margin: 1%;
  width: 50%;
  padding: 1%;
  &:hover {
    background: black;
    color: white;
    cursor: pointer;
  }
`;
const Right = styled.div`
  width: 50vw;
  height: 95vh;
  //   border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100vw;
    height: 47.5vh;
  }
`;
const Image = styled.div`
  width: 100%;
  height: 60%;
  //   border: 1px solid black;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../images/MS-Order-Hero-Desktop.jfif");
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100vw;
    height: 40.5vh;
  }
`;
const Footer = styled.div`
  width: 100vw;
  height: 5vh;
  //   border: 1px solid black;
  display: flex;
  justify-content: center;
  align-itmes: center;
  @media (max-width: 1200px) {
    height: 35vh;
    flex-direction: column;
  }
`;
const Inner2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-itmes: center;
  a {
    text-decoration: none;
    color: grey;
    font-size: 15px;
    // border: 1px solid black;
    margin: 0.4%;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
