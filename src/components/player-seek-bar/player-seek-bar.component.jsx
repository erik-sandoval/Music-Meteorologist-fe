import React, { Component } from "react";
import { connect } from "react-redux";
import { Direction, Slider, FormattedTime } from "react-player-controls";
import { seekTrackTime } from "../../utils/playerActions";

import { ProgressBarContainer, SliderBar } from "./player-seek-bar.styles";

class PlayerSeekBar extends Component {
  state = {
    isEnabled: true,
    direction: Direction.HORIZONTAL,
    position: null,
    duration: null,
    lastValueStart: null,
    lastValueEnd: null,
    value: null
  };

  changeTime = async (duration, lastValueEnd) => {
    const msSeconds = duration * lastValueEnd;

    seekTrackTime(msSeconds);
  };

  checkPosition = (song_position, song_length) => {
    for (; song_position < song_length; ) {
      this.setState({
        duration: song_length,
        position: song_position
      });
      let progress = (song_position / song_length) * 100;
      return progress;
    }
  };

  render() {
    const {
      songPosition,
      duration_ms
    } = this.props.currentSongInfo.currentSong;

    const timePercentValue = songPosition / duration_ms;
    return (
      <ProgressBarContainer>
        <FormattedTime
          numSeconds={songPosition / 1000}
          style={{ marginRight: 14 }}
        />
        <Slider
          isEnabled={this.state.isEnabled}
          direction={this.state.direction}
          onChange={newValue => this.setState(() => ({ value: newValue }))}
          onChangeStart={startValue =>
            this.setState(() => ({ lastValueStart: startValue }))
          }
          onChangeEnd={endValue => {
            this.setState({ lastValueEnd: endValue });
            this.changeTime(duration_ms, endValue);
          }}
          onIntent={intent => this.setState(() => ({ lastIntent: intent }))}
          onIntentStart={intent =>
            this.setState(() => ({ lastIntentStart: intent }))
          }
          onIntentEnd={() =>
            this.setState(() => ({
              lastIntentEndCount: this.state.lastIntentEndCount + 1
            }))
          }
          style={{
            borderRadius: 3,
            background: "white",
            height: "10px",
            width: "10rem"
          }}
        >
          <SliderBar
            direction={this.state.direction}
            value={timePercentValue}
            style={{ background: "#E20351" }}
          />
        </Slider>

        <FormattedTime
          numSeconds={duration_ms / 1000}
          style={{ marginLeft: 8 }}
        />
      </ProgressBarContainer>
    );
  }
}

const mapStateToProps = state => ({
  currentSongInfo: state.currentSong
});

export default connect(mapStateToProps)(PlayerSeekBar);
