import React from "react";

import { connect } from "react-redux";

import {
  Container,
  DivLeft,
  // DivRight,
  PlayLogo,
  PlayInfo,
  PlayH1,
  PlayH2
} from "./playlist-info.styles";

class PlaylistInfo extends React.Component {
  render() {
    const { display_name } = this.props.currentUser;
    return (
      <Container id="playInfoLD">
        <DivLeft>
          <PlayLogo className="playLogo" />
          <PlayInfo>
            <PlayH1
              className="playH1"
              style={{
                fontSize: 24,
                paddingTop: 30,
                paddingBottom: 0,
                marginLeft: 15
              }}
            >
              {`${display_name}'s Sound Drip Playlist`}
            </PlayH1>
            <div className="playH2" style={{ display: "flex" }}>
              <div className="playlisticon" />
              <PlayH2>20 Songs</PlayH2>
            </div>
          </PlayInfo>
        </DivLeft>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser.currentUser
});

export default connect(mapStateToProps, {})(PlaylistInfo);
