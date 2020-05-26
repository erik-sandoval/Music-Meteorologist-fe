import styled from "styled-components";

export const ElementContainer = styled.div`
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

export const SideBarContainer = styled.div`
  height: auto;
  width: 377px;
  background: #121416;
  min-width: 377px;
  font-family: Work Sans;

  @media (max-width: 600px) {
    width: 100vw;
    display: flex;
    justify-content: center;
  }
`;

export const MainBarContainer = styled.div`
  height: 90vh;
  width: 100%;
  background: #17191c;
  font-family: Work Sans;
`;

export const PlaylistSongsContainer = styled.div`
  height: auto;
  width: 100%;
  background: #17191c;
  font-family: Work Sans;
`;
