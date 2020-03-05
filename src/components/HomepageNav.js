import React from 'react';
import styled from 'styled-components';
import '../App.css';
import MusicLogo from '../assets/sounddrip.svg';

const HomepageNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  text-decoration: none;
  margin-left: 5%;
  padding-top: 2%;
  height: 60px;
  width: 550px;
  color: #9DA4AF;
  font-size: 19px;
  position: absolute;

  @media (max-width: 576px) {
    display: none;
  }
`;

const NavbarLinks = styled.a`
    text-decoration: none;
    color: #9DA4AF;
    font-size: 20px;

    &:hover {
        color: white;
      }
`;

const StyledA = styled.a`
    display: inline-block;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
`

const DropDownContent = styled.div`
    display: none;
    position: absolute;
    min-width: 160px;
    z-index: 1;
    background-color:#151619;
`;

const Arrow = styled(StyledA)`

border: solid #9DA4AF;
border-width: 0 3px 3px 0;
display: inline-block;
padding: 3px;
transform: rotate(45deg);
-webkit-transform: rotate(45deg);
margin-bottom: 3px;
color: #9DA4AF;
`

const DropDownLi = styled(NavbarLinks)`
    display: inline-block;
    &:hover ${DropDownContent} {
        display: block;
    }
    &:hover ${Arrow} {
      border: solid white;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
  }
`;
const SubA = styled(StyledA)`
    text-decoration: none;
    display: block;
    text-align: left;
    color: #9DA4AF;
    padding: 10px;
    cursor: pointer;
    &:hover {
     color: white;
     background-color: rgb(226, 3, 81);
  }
`;

const frontend = e => { 
  e.preventDefault();
  window.open("https://github.com/Lambda-School-Labs/Music-Meteorologist-fe")
}

const backend = e => { 
  e.preventDefault();
  window.open("https://github.com/Lambda-School-Labs/Music-Meteorologist-ds")
}

const HomepageNav = () => {

  return (
    <HomepageNavbar style={{position: "fixed"}}>
        <a href="/"><img src={MusicLogo}/></a>
        <NavbarLinks href="/about">How it works?</NavbarLinks>
        <NavbarLinks href="/team">Team</NavbarLinks>
        <DropDownLi>
            <StyledA>
                GitHub <Arrow/>

            </StyledA>
            <DropDownContent>
                {" "}
                <SubA onClick={frontend}>
                    Front-end
                </SubA>
                <SubA onClick={backend}>
                    Data Science
                </SubA>
            </DropDownContent>
          </DropDownLi>
    </HomepageNavbar>
  );

}

export default HomepageNav