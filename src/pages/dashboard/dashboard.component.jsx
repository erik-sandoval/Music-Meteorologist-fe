import React from "react";
import { connect } from "react-redux";

import LoadingPage from "../loading/loading.component";

import MusicPlayer from "../../components/music-player/music.player.component";

import { postDSSong } from "../../redux/ds/ds.actions";

// Styling
import "../../App.css";

class Dashboard extends React.Component {
  state = {
    collapse: false,
    popout: false,
    playlistCreated: false,
    userDataFetching: false
  };

  componentDidMount() {
    this.props.postDSSong(localStorage.getItem("token"));
  }

  logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.history.push("/logout");
  };

  render() {
    return (
      <div className="dashboard">
        {this.props.fetchingDsSongs ? (
          <div>
            <MusicPlayer spotifyId={this.props.spotifyUser} />
          </div>
        ) : (
          <LoadingPage />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dsSongsData: state.getSongsReducer.dsSongsData
});

export default connect(mapStateToProps, { postDSSong })(Dashboard);
