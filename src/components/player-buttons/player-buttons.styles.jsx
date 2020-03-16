import styled from "styled-components";

export const PlayerButtonsController = styled.div`
  display: flex;
  height: 30px;
  width: 200px;
  justify-content: space-between;
  align-items: center;
  font-family: Work Sans;
`;

export const PlayerButton = styled.div`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  .shuffle-icon {
    height: 25px;
    width: 25px;
    fill: ${props => (props.shuffled ? "#e20351" : "white")};
    cursor: pointer;

    &:hover {
      fill: ${props => (props.shuffled ? "white" : "#e20351")};
    }
  }

  .heart-icon {
    height: 25px;
    width: 25px;
    fill: ${props => (props.liked ? "#e20351" : "white")};

    &:hover {
      fill: ${props => (props.liked ? "white" : "#e20351")};
    }
  }
`;

export const sdasd = styled.svg``;
