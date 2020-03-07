import React, { useState, useRef } from "react";

import MusicLogo from "../../../assets/sounddrip.svg";
// import "../../views/styles/mobileNav.css";

import { StyledBurger, StyledMenu } from "./mobile-nav.styles";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/about">How it works?</a>
      <a href="/team">Team</a>
      <a
        href="https://github.com/Lambda-School-Labs/Music-Meteorologist-fe"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </StyledMenu>
  );
};

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  return (
    <div ref={node}>
      <div className="logo">
        <a href="/">
          <img src={MusicLogo} alt="Music Logo" />
        </a>
      </div>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
};

export default MobileNav;
