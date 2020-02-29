import React, { Component } from "react";
import { connect } from "react-redux";
import { Direction, Slider, FormattedTime } from "react-player-controls";
import { seekTrackTime } from "../playerActions/playerActions";
import styled from "styled-components";

const SliderBar = ({ direction, value, style }) => (
  <div
    style={Object.assign(
      {},
      {
        position: "absolute",
        background: "grey",
        borderRadius: 4
      },
      direction === Direction.HORIZONTAL
        ? {
            top: 0,
            bottom: 0,
            left: 0,
            width: `${value * 100}%`
          }
        : {
            right: 0,
            bottom: 0,
            left: 0,
            height: `${value * 100}%`
          },
      style
    )}
  />
);
const SliderHandle = ({ direction, value, style }) => (
  <div
    style={Object.assign(
      {},
      {
        position: "absolute",
        width: 16,
        height: 16,
        background: "green",
        borderRadius: "100%",
        transform: "scale(1)",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.3)"
        }
      },
      direction === Direction.HORIZONTAL
        ? {
            top: 0,
            left: `${value * 100}%`,
            marginTop: -4,
            marginLeft: -8
          }
        : {
            left: 0,
            bottom: `${value * 100}%`,
            marginBottom: -8,
            marginLeft: -4
          },
      style
    )}
  />
);

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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
    console.log({ duration, lastValueEnd });
    const msSeconds = duration * lastValueEnd;

    seekTrackTime(msSeconds);
  };

  checkPlayer = (player, song) => {
    if (player !== undefined && song.length !== 0) {
      player.getCurrentState().then(state => {
        if (!state) {
          console.error(
            "User is not playing music through the Web Playback SDK"
          );
          return;
        }

        let { position, duration } = state;
        this.checkPosition(position, duration);
      });
    }
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
    const { duration, position, lastValueEnd } = this.state;
    const { player, song } = this.props;
    const timePercentValue = position / duration;

    if (song) {
      this.checkPlayer(player, song);
    }

    return (
      <ProgressBarContainer>
        <FormattedTime
          numSeconds={this.state.position / 1000}
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
            this.changeTime(duration, endValue);
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
          {/* Here we render whatever we want. Nothings is rendered by default. */}
          <SliderBar
            direction={this.state.direction}
            value={this.state.lastIntent}
            style={{
              background: "#D0D0D0"
            }}
          />
          <SliderBar
            direction={this.state.direction}
            value={timePercentValue}
            style={{ background: "#E20351" }}
          />
        </Slider>

        <FormattedTime
          numSeconds={this.state.duration / 1000}
          style={{ marginLeft: 8 }}
        />
      </ProgressBarContainer>
    );
  }
}

const mapStateToProps = state => ({
  song: state.currentSongReducer.item
});

export default connect(mapStateToProps)(PlayerSeekBar);
