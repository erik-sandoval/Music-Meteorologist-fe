import React from "react";
import styled from "styled-components";
import "../App.css";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #151619;
  height: 66px;
  width: 100%;
  font-size: 18px;
  position: absolute;
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p> © Copyright 2019, SoundDrip </p>
    </FooterContainer>
  );
};

export default Footer;
