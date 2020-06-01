import React from "react";

import MusicLogo from "../../../assets/sounddrip.svg";

import { HomepageNavbar, NavbarLinks } from "./desktop-nav.styles";

const HomepageNav = () => {
  return (
    <HomepageNavbar>
      <a href="/">
        <img src={MusicLogo} alt="Music Logo" />
      </a>
      <NavbarLinks href="/about">How it works?</NavbarLinks>
      <NavbarLinks href="/team">Team</NavbarLinks>
      <NavbarLinks
        href="https://github.com/erik-sandoval/Sound-Drip-V2"
        target="_blank"
      >
        Github
      </NavbarLinks>
    </HomepageNavbar>
  );
};

export default HomepageNav;
