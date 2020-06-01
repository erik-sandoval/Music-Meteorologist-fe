import React, { Component } from "react";
import { connect } from "react-redux";
import { Direction, Slider, FormattedTime } from "react-player-controls";
import { seekTrackTime } from "../../utils/playerActions";

import { ProgressBarContainer, SliderBar } from "./player-seek-bar.styles";
import { setLocalTrackTime } from "../../redux/spotify/spotify.actions";

class PlayerSeekBar extends Component {
  state = {
    isEnabled: true,
    direction: Direction.HORIZONTAL,
    lastValueStart: null,
    lastValueEnd: null,
    value: null,
    songPosition: this.props.currentSong.songPosition
  };

  changeTime = (duration, lastValueEnd) => {
    const msSeconds = duration * lastValueEnd;

    seekTrackTime(msSeconds);
  };

  render() {
    const { localTrackPosition } = this.props;
    const { duration_ms } = this.props.currentSong;
    const timePercentValue = localTrackPosition / duration_ms;

    return (
      <ProgressBarContainer>
        <FormattedTime
          numSeconds={localTrackPosition / 1000}
          style={{ width: "45px" }}
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
  currentSong: state.currentSong.currentSong,
  localTrackPosition: state.currentSong.localTrackTime
});

export default connect(mapStateToProps, { setLocalTrackTime })(PlayerSeekBar);
