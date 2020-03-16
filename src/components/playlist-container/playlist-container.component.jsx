import React from "react";
import { connect } from "react-redux";
import Playlist from "../playlist/playlist.component";
import "../../App.css";

// Styling
import "../../App.css";

class PlayListContainer extends React.Component {
  state = {
    collapse: true,
    popout: false,
    playlistCreated: false,
    userDataFetching: false
  };

  openPlaylist() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  openAudioDetails() {
    this.setState({
      popout: !this.state.popout
    });
  }

  logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.history.push("/logout");
  };

  render() {
    return (
      <div className="dashboard">
        <div id="mainBarLD1">
          {/* <List> */}
          <div
            className="listTitles"
            style={{
              borderBottom: "1px solid #454B54",
              fontSize: 15,
              height: 20,
              color: "#454B54",
              fontWeight: "bold",
              display: "flex",
              width: "auto",
              marginBottom: "2px"
            }}
          >
            <div className="moveTitle" style={{ marginLeft: 205 }}>
              Track / Artist{" "}
            </div>
            <div className="hideTitle" style={{ marginLeft: 120 }}>
              Album
            </div>
            <div className="hideTitle" style={{ marginLeft: 150 }}>
              Duration
            </div>
            <div className="hideTitle" style={{ marginLeft: 63 }}>
              Add to Playlist
            </div>
          </div>
          <div
            style={{
              width: "auto",
              minWidth: "850px",
              overflow: "auto",
              color: "white",
              marginLeft: "45px",
              overflowY: "scroll",
              height: "68vh",
              background: "transparent",
              boxShadow: "none",
              textAlign: "left"
            }}
          >
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(PlayListContainer);
