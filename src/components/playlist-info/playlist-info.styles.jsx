import styled from "styled-components";

export const Container = styled.div`
  height: 175px;
  width: 100%;
  background: #1e2024;
  font-family: Work Sans;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
  }
`;

export const LeftSideDiv = styled.div`
  display: flex;
  align-items: center;
  width: 55%;

  @media (max-width: 600px) {
    max-width: 100vw;
    width: 50%;
  }
`;

export const PlayLogo = styled.img`
  width: 125px;
  height: 125px;
  margin-left: 50px;
`;

export const DivRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 4%;
  @media (max-width: 600px) {
    justify-content: center;
    width: 100vw;
  }
`;

export const PlaylistButton = styled.button`
  width: 200px;
  color: white;
  background-color: #e20351;
  font-weight: 700;
  font-family: Work Sans;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  transition: 0.4s ease;
  padding: 10px;
  &:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 3px 25px rgba(226, 3, 81, 0.7);
    transition: 0.4s ease;
  }
  &:active {
    transform: scale(0.5);
    transition: 0.4s ease;
  }

  @media (max-width: 600px) {
    margin-right: 0px;
    margin-bottom: 20px;
  }
`;

export const PlayH1 = styled.h1`
  font-family: Work Sans;
  font-weight: bold;
  font-size: 24px;
  margin-left: 15px;
`;

export const PlayH2 = styled.h1`
  font-family: Work Sans;
  text-align: left;
  font-size: 18;
  padding-top: 5;
  margin-left: 8;
  padding-bottom: 0;
  margin-top: 0;
`;
