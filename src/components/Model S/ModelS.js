import React from "react";
import styled from "styled-components";
import ModelSCarHome from "./ModelSCarHome";
// import MessageIcon from '@mui/icons-material/Message';
import { MessageOutlined } from "@ant-design/icons";
import ModelSInterior from "./ModelSInterior";

const ModelS = () => {
  return (
    <>
      <ModelSCarHome />
      <ModelSInterior />
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
