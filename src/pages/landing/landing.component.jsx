import React, { Component } from "react";

import ButtonAuth from "../../components/buttons/auth-button.styles";
// import MobileNav from "../../components/navigation-bar/mobile-nav/mobile-nav.component";

import Footer from "../../components/footer/footer.component";
import HomepageNav from "../../components/navigation-bar/desktop-nav/desktop-nav.component";
import "./landing.styles.css";
import { scopes } from "../../utils/spotifyScopes";
import albums_background from "../../assets/albums-background.svg";
import albums_background_mobile from "../../assets/albums-background-mobile.svg";

//
const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "256aebf9b04a4f5480a757f770864028";
const redirectUri = process.env.REACT_APP_REDIRECT_URL;

// gets the access token from the callback url paramaters

export class Landing extends Component {
  componentDidMount() {}

  render() {
    const url = window.location;
    const accessToken = new URLSearchParams(url.hash).get("#access_token");
    console.log("ClientID: ", clientId)

    if (accessToken) {
      localStorage.setItem("token", accessToken);
      this.props.history.push("/dashboard");
    }
    return (
      <div className="auth">
        <div className="mobileNavWrap">{/* <MobileNav /> */}</div>
        <HomepageNav />
        <div className="main-wrapper">
          <div className="main-cta-spotify">
            <div className="img-container">
              <img src={albums_background} alt="" className="bd-box" />
            </div>
            <div className="text-content-container">
              <div className="text-content">
                <h2>Discover songs by their traits</h2>
                <p>
                  We'll curate a playlist based on the different traits of songs
                  you like in your Spotify library.
                </p>
                <div className="cta-signup">
                  <ButtonAuth
                    className="loginHover"
                    style={{ zIndex: "0" }}
                    as="a"
                    href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
                      scopes
                    )}&response_type=token`}
                  >
                    Login With Spotify
                  </ButtonAuth>
                  <div className="img-container-mobile">
                    <img
                      src={albums_background_mobile}
                      alt=""
                      className="bd-box"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;
