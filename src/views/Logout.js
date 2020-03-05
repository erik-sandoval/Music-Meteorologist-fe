import React from "react";
import Footer from "../components/footer/footer.component.jsx";
import AuthButton from "../components/dashboard/element-styles/AuthButton.js";
import MobileNav from "../components/navigation-bar/MobileNav.js";
import HomepageNav from "../components/navigation-bar/HomepageNav.js";
import styled from "styled-components";
import "../App.css";

export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "256aebf9b04a4f5480a757f770864028"; // testing ENV

const redirectUri = process.env.REACT_APP_REDIRECT_URL;

const scopes = [
  "streaming",
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-library-read",
  "user-library-modify",
  "user-modify-playback-state",
  "user-read-email",
  "user-read-private",
  "playlist-modify-public",
  "playlist-modify-private"
];

const LogoutContainer = styled.div`
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

const Fullscreen = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Gone = styled.h2`
  font-size: 60px;
  margin: 2%;
  @media (max-width: 576px) {
    text-align: center;
    font-size: 45px;

  }
`;

const Sentence = styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.75);
  margin: 2%;
  margin-bottom: 7%;
  @media (max-width: 576px) {
    text-align: center;
  }
`;
const Return = styled.a`
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

const Logout = () => {
  return (
    <div>
      <div className="mobileNavWrap">
        <MobileNav/>
      </div>  
    <HomepageNav/>
    <Fullscreen>
      <LogoutContainer className="lockScroll">
        <Gone>Gone so soon?</Gone>
        <Sentence>
          We hate to see you leave but hope you’ll come back for more fun. If
          you change your mind, you can log back in below.
        </Sentence>
          <AuthButton style={{zIndex: '0'}}
          noAbsolute={true}
          noTransform={true}
          as='a'
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
            scopes
          )}&response_type=token&show_dialog=true`}
        >
          Login With Spotify
        </AuthButton>
        <Return as='a' href={"/"}>
          Return to Homepage
        </Return>
        </LogoutContainer>
        <Footer />
      </Fullscreen>
    </div>
  );
};

export default Logout;
