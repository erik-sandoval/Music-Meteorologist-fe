import React from "react";
import "../../../views/styles/navbar.css";
import MusicLogo from "../../../assets/sounddrip.svg";

import MenuListComposition from "./Dropdown";

import {
  Nav1,
  NavContainer,
  Logo1,
  Navname,
  Relog
} from "./dashboard-nav.styles";

const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "256aebf9b04a4f5480a757f770864028";
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

class NavBar extends React.Component {
  homeButton = e => {
    e.preventDefault();
    window.location.href = "/";
  };
  render() {
    return (
      <Nav1>
        <NavContainer>
          <Logo1
            src={MusicLogo}
            alt={"Navbar logo"}
            onClick={e => {
              this.homeButton(e);
            }}
          ></Logo1>
          <Navname>
            {this.props.userName ? (
              this.props.userName
            ) : (
              <Relog
                as="a"
                href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
                  scopes
                )}&response_type=token&show_dialog=true`}
              >
                Login
              </Relog>
            )}
            <MenuListComposition
              navBarProps={this.props.musicPlayerProps}
              userName={this.props.userName}
              deviceId={this.props.deviceId}
            />
          </Navname>
        </NavContainer>
      </Nav1>
    );
  }
}

export default NavBar;
