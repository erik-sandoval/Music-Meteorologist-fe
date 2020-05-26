import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 3136px;

  @media (max-width: 576px) {
    height: 1800px;
  }
`;

export const Header = styled.h2`
  font-size: 48px;
  width: 900px;
  margin: 5%;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 21px;
  }
`;

export const SecondaryHeader = styled.h4`
  font-size: 24px;
  margin-bottom: 2%;

  @media (max-width: 576px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const Sentence = styled.p`
  font-size: 20px;
  color: white;
  opacity: 0.75;

  @media (max-width: 576px) {
    font-size: 13px;
    text-align: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  margin-left: 25%;
  margin-right: 25%;
  height: 1500px;
  grid-template-columns: 50% 50%;
  grid-template-rows: 30% 30% 30%;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 10%;
    padding: 0%;
    height: 1500px;
  }
`;

export const InnerGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2%;
  padding: 10%;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    padding: 0%;
  }
`;
export const InnerGridReverse = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2%;
  padding: 10%;
  @media (max-width: 576px) {
    display: none;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: #151619;
  height: 66px;
  width: 100%;
  font-size: 18px;
  position: relative;
  bottom: 0;
  margin-top: 10%;
`;
