import styled from "styled-components";

export const HomepageNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  text-decoration: none;
  margin-left: 5%;
  padding-top: 2%;
  height: 60px;
  width: 550px;
  color: #9da4af;
  font-size: 19px;
  position: absolute;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const NavbarLinks = styled.a`
  text-decoration: none;
  color: #9da4af;
  font-size: 20px;

  &:hover {
    color: white;
  }
`;