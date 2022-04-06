import React from "react";
import styled from "styled-components";
import ModelSCarHome from "./ModelSCarHome";
import { MessageOutlined } from "@ant-design/icons";
import ModelSInterior from "./ModelSInterior";
import ModelSCarousel from "./ModelSCarousel";
import ModelSFeatures from "./ModelSFeatures";
import ModelSFeaturesII from "./ModelSFeaturesII";
import ModleSFeaturesIII from "./ModleSFeaturesIII";
import ModelSFeaturesfourth from "./ModelSFeaturesfourth";
import ModelSFeaturesfifth from "./ModelSFeaturesfifth";

const ModelS = () => {
  return (
    <>
      <ModelSCarHome />
      <ModelSInterior />
      <ModelSCarousel />
      <ModelSFeatures />
      <ModelSFeaturesII />
      {/*Here the rollout component comes but i will make it when this page completes*/}
      <ModleSFeaturesIII />
      <ModelSFeaturesfourth />
      <ModelSFeaturesfifth />
      {/* <DiscussionButton>
        <MessageOutlined />
      </DiscussionButton> */}
    </>
  );
};

export default ModelS;

// const DiscussionButton = styled.div`
// border: 2px solid black;
// color: black;
// border-radius: 50px;
// font-size: 2.2rem;
// // display: inline;
// float: right;
// padding: 10px;
// // margin-bottom: 15px;
// position: fixed;
// z-index: 10;

// `;
