// modules
import React from "react";

// components
// import MobileNav from "../../components/navigation-bar/mobile-nav/mobile-nav.component";
import HomepageNav from "../../components/navigation-bar/desktop-nav/desktop-nav.component";
import Footer from "../../components/footer/footer.component";

// styles
import {
  AboutContainer,
  Header,
  Grid,
  InnerGrid,
  SecondaryHeader,
  Sentence,
  InnerGridReverse
} from "./about.styles";
import AuthButton from "../../components/buttons/auth-button.styles";
import "./about.styles.css";

// assets
import AboutImage from "../../assets/About-Image.svg";
import ChartImage from "../../assets/chart-image.svg";
import SpotifyImage from "../../assets/spotify-image.svg";
import AboutImageMobile from "../../assets/mobileWorks.svg";
import SongImage from "../../assets/song-image.svg";

// utils
import { scopes } from "../../utils/spotifyScopes";

const redirectUri = process.env.REACT_APP_REDIRECT_URL;
export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "256aebf9b04a4f5480a757f770864028"; // testing ENV

const About = () => (
  <>
    <AboutContainer>
      <div className="mobileNavWrap">{/* <MobileNav /> */}</div>
      <HomepageNav />
      <div className="about-image">
        <img className="desktop-about" src={AboutImage} alt="about info" />
        <img
          className="mobile-about"
          src={AboutImageMobile}
          alt="mobile about info"
        />
      </div>
      <div className="header-container">
        <Header>
          Sit back while we create a playlist of songs you'll love.
        </Header>
      </div>
      <Grid>
        <InnerGrid>
          <SecondaryHeader>
            Songs picked just for your music taste.
          </SecondaryHeader>
          <Sentence style={{ zIndex: "-1" }}>
            We’ll put together a playlist for you based on the musical traits of
            the songs you like.
          </Sentence>
        </InnerGrid>
        <InnerGrid>
          <img className="about-images" src={ChartImage} alt="chart" />
        </InnerGrid>
        <InnerGridReverse>
          <img className="about-images" src={SpotifyImage} alt="spotify" />
        </InnerGridReverse>
        <InnerGridReverse>
          <SecondaryHeader>
            Our prediction model will do all the work.
          </SecondaryHeader>
          <Sentence style={{ zIndex: "-1" }}>
            We’ve got you covered, just join with your Spotify account and we’ll
            take it from there.
          </Sentence>
        </InnerGridReverse>
        <div className="reverse">
          <InnerGrid>
            <img
              className="about-images"
              src={SpotifyImage}
              alt="spotify about"
            />
          </InnerGrid>
          <InnerGrid>
            <SecondaryHeader>
              Our prediction model will do all the work.
            </SecondaryHeader>
            <Sentence style={{ zIndex: "-1" }}>
              We’ve got you covered, just join with your Spotify account and
              we’ll take it from there.
            </Sentence>
          </InnerGrid>
        </div>
        <InnerGrid>
          <SecondaryHeader>Listen and enjoy!</SecondaryHeader>
          <Sentence style={{ zIndex: "-1" }}>
            Voila! Now you can add the playlist to your Spotify or enjoy in our
            music player.
          </Sentence>
        </InnerGrid>
        <InnerGrid>
          <img className="about-images" src={SongImage} alt="song info" />
        </InnerGrid>
      </Grid>
      <div className="button-container">
        <AuthButton
          className="startedButton"
          as="a"
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
            scopes
          )}&response_type=token&show_dialog=true`}
        >
          Get Started!
        </AuthButton>
      </div>
    </AboutContainer>
    <Footer />
  </>
);

export default About;
