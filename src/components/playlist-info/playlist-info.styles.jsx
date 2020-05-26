import styled from "styled-components";

export const Container = styled.div`
  height: 175px;
  width: 100%;
  background: #1e2024;
  font-family: Work Sans;
  display: flex;

  @media (max-width: 600px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
  }
`;

export const DivLeft = styled.div`
  width: 80%;
  height: 80%;
  margin-top: 15px;
  display: flex;
  min-width: 685px;

  @media (max-width: 600px) {
    max-width: 100vw;
    width: 50%;
  }
`;

export const PlayLogo = styled.a`
  width: 125px;
  height: 125px;
  margin-left: 50px;
  margin-top: 10px;
`;
export const PlayInfo = styled.div``;

export const DivRight = styled.div`
  width: 20%;
  height: 80%;
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 600px) {
    justify-content: center;
    width: 100vw;
    margin-top: 0px;
  }
`;

export const MakePlaylist = styled.button`
  min-width: 135px;
  color: white;
  background-color: #e20351;
  font-family: Work Sans;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-right: 45px;
  margin-bottom: 10px;
  transition: 0.4s ease;
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
  font-size: 12;
  font-family: Work Sans;
  font-weight: bold;
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
