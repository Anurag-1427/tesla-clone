import React from "react";
import styled from "styled-components";

const ModelSFeaturesSeventh = () => {
  return (
    <>
      <WrapContainer>
        <Left>
          <Image />
        </Left>
        <Right>
            <Inner>
                <First><h2>Model S Specs</h2></First>
                <Second>
                    <Button>Model S Plaid</Button>
                    <Button>Model S</Button>
                </Second>
                <Third></Third>
            </Inner>
        </Right>
      </WrapContainer>
    </>
  );
};

export default ModelSFeaturesSeventh;

const WrapContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  @media (max-width: 900px) {
      flex-direction: column;   
  }
`;
const Left = styled.div`
  width: 50vw;
  height: 100vh;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  @media (max-width: 900px) {
      width: 100vw;
      height: 50vh;
  }
`;
const Image = styled.div`
  width: 40vw;
  height: 90vh;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("images/MS-Specs-Hero-Desktop.jfif");
  @media (max-width: 900px) {
    width: 100vw;
    height: 50vh;
}
`;
const Right = styled.div`
  width: 50vw;
  color: white;
  background: grey;
  height: 100vh;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 100vw;
    height: 50vh;
}
`;
const Inner = styled.div`
    border: 1px solid white;
    height: 50vh;
    width: 100%;
    // display: flex;
    // justify-content: flex-start;
    // flex-direction: column;
`;
const First = styled.div`
    border: 1px solid white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    h2{
      color: white;
    }
`;
const Second = styled.div`
    border: 1px solid white;
    display: flex;
`;
const Button = styled.div`
    border: 3px solid white;
    width: 30%;
    border-radius: 50px;
`;
const Third = styled.div`
    border: 1px solid white;
`;