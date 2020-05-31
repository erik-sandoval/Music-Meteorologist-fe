import React from "react";
import { scopes } from "../../utils/spotifyScopes";
import {
  Fullscreen,
  LogoutContainer,
  Gone,
  Sentence,
  Return
} from "./logout.styles";

import "../../App.css";
import HomepageNav from "../../components/navigation-bar/desktop-nav/desktop-nav.component";
import MobileNav from "../../components/navigation-bar/mobile-nav/mobile-nav.component";

import Footer from "../../components/footer/footer.component";

import AuthButton from "../../components/buttons/auth-button.styles";

export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "256aebf9b04a4f5480a757f770864028"; // testing ENV

const redirectUri = process.env.REACT_APP_REDIRECT_URL;

const Logout = () => {
  return (
    <div>
      <div className="mobileNavWrap">
        <MobileNav></MobileNav>
      </div>
      <HomepageNav></HomepageNav>
      <Fullscreen>
        <LogoutContainer className="lockScroll">
          <Gone>Gone so soon?</Gone>
          <Sentence>
            We hate to see you leave but hope you’ll come back for more fun. If
            you change your mind, you can log back in below.
          </Sentence>
          <AuthButton
            style={{ zIndex: "0" }}
            noAbsolute={true}
            noTransform={true}
            as="a" href=
            {`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
              scopes
            )}&response_type=token&show_dialog=true`}>
            Login With Spotify
          </AuthButton>
          <Return as="a" href={"/"}>
            Return to Homepage
          </Return>
        </LogoutContainer>
        <Footer />
      </Fullscreen>
    </div>
  );
};

export default Logout;
