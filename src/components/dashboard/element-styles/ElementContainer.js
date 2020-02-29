import styled from "styled-components";

export default styled.div`
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: row;
  background: #17191c;
  font-family: Work Sans;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
