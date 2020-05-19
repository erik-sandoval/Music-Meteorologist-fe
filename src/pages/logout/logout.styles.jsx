import styled from "styled-components";
export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  height: 600px;
  width: 600px;
  padding-top: 14%;
  margin: 0%;
  @media (max-width: 576px) {
    padding-top: 45%;
    margin: 2%;
  }
`;

export const Fullscreen = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const Gone = styled.h2`
  font-size: 60px;
  margin: 2%;
  @media (max-width: 576px) {
    text-align: center;
    font-size: 45px;
  }
`;

export const Sentence = styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.75);
  margin: 2%;
  margin-bottom: 7%;
  @media (max-width: 576px) {
    text-align: center;
  }
`;
export const Return = styled.a`
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 15px;
  font-weight: 500;
  font-size: 20px;
  color: white;
  background-color: none;
  border: none;
  border-radius: 5px;
  width: 313px;
  text-decoration: none;
  display: flex;
  justify-content: center;
`;
