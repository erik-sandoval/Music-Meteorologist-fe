import React from "react";
import styled from "styled-components";
import MobileNav from "../../components/navigation-bar/MobileNav";

import {
  AboutContainer,
  Header,
  Grid,
  InnerGrid,
  SecondaryHeader,
  Sentence,
  InnerGridReverse
} from "./about.styles";
import Button from "../../components/dashboard/element-styles/AuthButton.js";

import "../../views/styles/about.css";
import HomepageNav from "../../components/HomepageNav.js";
import AboutImage from "../../assets/About-Image.svg";
import ChartImage from "../../assets/chart-image.svg";
import SpotifyImage from "../../assets/spotify-image.svg";
import AboutImageMobile from "../../assets/mobileWorks.svg";
import SongImage from "../../assets/song-image.svg";
import "../../App.css";
import Footer from "../../components/Footer";

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

const About = () => (
  <>
    <AboutContainer>
      <div className="mobileNavWrap">
        <MobileNav />
      </div>
      <HomepageNav />
      <div className="about-image">
        <img className="desktop-about" src={AboutImage} />
        <img className="mobile-about" src={AboutImageMobile} />
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
          <img className="about-images" src={ChartImage} alt="chart"/>
        </InnerGrid>
        <InnerGridReverse>
          <img className="about-images" src={SpotifyImage} alt="spotify"/>
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
            <img className="about-images" src={SpotifyImage} />
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
          <img className="about-images" src={SongImage} />
        </InnerGrid>
      </Grid>
      <div className="button-container">
        <Button
          className="startedButton"
          as="a"
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
            scopes
          )}&response_type=token&show_dialog=true`}
        >
          Get Started!
        </Button>
      </div>
    </AboutContainer>
    <Footer />
  </>
);

export default About;
