import React from "react";
import playLogo from "../../assets/rectangle.png";
import { connect } from "react-redux";
import { postDSSong } from "../../redux/ds/ds.actions";

import {
  Container,
  LeftSideDiv,
  DivRight,
  PlayLogo,
  PlayInfo,
  PlayH1,
  PlayH2,
  PlaylistButton
} from "./playlist-info.styles";

class PlaylistInfo extends React.Component {
  render() {
    const { display_name } = this.props.currentUser;
    return (
      <Container>
        <LeftSideDiv>
          <PlayLogo src={playLogo} />
          <div>
            <PlayH1>{`${display_name}'s Sound Drip Playlist`}</PlayH1>
            <div style={{ display: "flex" }}>
              <div className="playlisticon" />
              <PlayH2>20 Songs</PlayH2>
            </div>
          </div>
        </LeftSideDiv>
        <DivRight>
          <PlaylistButton>Add This Playlist!</PlaylistButton>
          <PlaylistButton onClick={this.props.postDSSong}>
            Get New PlayList
          </PlaylistButton>
        </DivRight>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser.currentUser
});

export default connect(mapStateToProps, { postDSSong })(PlaylistInfo);
