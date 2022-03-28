import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade'

const ModelSCarousel = () => {
  return (
    <>
      <CarouselContainer>
    <Fade bottom>
        
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/2021-tesla-model-s-plaid.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-md-block">
                <h1>17” Cinematic Display</h1>
                <p>
                  With 2200x1300 resolution, ultra bright, true colors and
                  exceptional responsiveness, the new center display is the best
                  screen to watch anywhere.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/2021-tesla-model-s-yoke-steering-wheel.webp"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-md-block">
                <h1>Focus on Driving</h1>
                <p>
                  The ultimate focus on driving: no stalks, no shifting. Model S
                  is the best car to drive, and the best car to be driven in.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/MS-Interior-Carousel-C-Desktop.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-md-block">
                <h1>Perfect Environment</h1>
                <p>
                  Clean, powerful yet invisible cabin conditioning. Tri-zone
                  temperature controls, ventilated front seats and HEPA
                  filtration come standard.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/MX-Interior-Carousel-D-Desktop.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-md-block">
                <h1>Redesigned Second Row</h1>
                <p>
                  Seating for three adults, with extra legroom, headroom and a
                  stowable armrest with integrated storage and wireless
                  charging.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Fade>
      </CarouselContainer>
    </>
  );
};

export default ModelSCarousel;

const CarouselContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  & > div {
    text-align: center;
    width: 70vw;
    margin: auto;
    padding-top: 3%;
    h1,
    p {
      color: white;
    }

    @media (max-width: 768px) {
      width: 100vw;
      height: 100vh;
      left: 0;
      padding-top: 45%;

      p {
        font-size: 0.8rem;
        padding-bottom: -10px;
      }

      h1,
      p {
        position: relative;
        bottom: -50px;
      }
    }
    @media (max-width: 600px) {
      h1 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.7rem;
        padding-bottom: -10px;
      }

      h1,
      p {
        position: relative;
        bottom: -50px;
      }
    }
    
  }
`;

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
