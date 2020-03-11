import React, { Component } from "react";
import { connect } from "react-redux";
import { Direction, Slider, FormattedTime } from "react-player-controls";
import { seekTrackTime } from "../../utils/playerActions";

import { ProgressBarContainer, SliderBar } from "./player-seek-bar.styles";

class PlayerSeekBar extends Component {
  state = {
    isEnabled: true,
    direction: Direction.HORIZONTAL,
    lastValueStart: null,
    lastValueEnd: null,
    value: null
  };

  changeTime = (duration, lastValueEnd) => {
    const msSeconds = duration * lastValueEnd;

    seekTrackTime(msSeconds);
  };

  render() {
    const { position, duration } = this.state;
    const { songPosition, duration_ms } = this.props.currentSong;
    const timePercentValue = position / duration;

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
  currentSong: state.currentSong.currentSong
});

export default connect(mapStateToProps)(PlayerSeekBar);
