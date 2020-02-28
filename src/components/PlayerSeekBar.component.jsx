import React, { Component } from "react";
import { connect } from "react-redux";
import { Direction, Slider, FormattedTime } from "react-player-controls";
import { seekTrackTime } from "../playerActions/playerActions";

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

  componentDidMount() {
    const {
      duration,
      position,
      isEnabled,
      value,
      lastValueEnd,
      lastValueStart
    } = this.state;
    const { player, song } = this.props;

    const timePercentValue = position / duration;

    if (song) {
      this.checkPlayer(player, song);
    }
  }

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
    const {
      duration,
      position,
      isEnabled,
      value,
      lastValueEnd,
      lastValueStart
    } = this.state;
    const { player, song } = this.props;
    const timePercentValue = position / duration;

    if (song) {
      this.checkPlayer(player, song);
    }

    return (
      <div>
        <FormattedTime numSeconds={this.state.position / 1000} />
        <Slider
          isEnabled={this.state.isEnabled}
          direction={this.state.direction}
          onChange={newValue => this.setState(() => ({ value: newValue }))}
          onChangeStart={startValue =>
            this.setState(() => ({ lastValueStart: startValue }))
          }
          onChangeEnd={endValue => {
            this.setState({ lastValueEnd: endValue });
            this.changeTime(duration, lastValueEnd);
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
            value={timePercentValue}
            style={{
              background: "red",
              width: `${timePercentValue}%`
            }}
          />
          <SliderBar
            direction={this.state.direction}
            value={lastValueEnd}
            style={{ background: "gray", width: `${timePercentValue}%` }}
          />
          <SliderHandle
            direction={this.state.direction}
            value={timePercentValue}
            style={{ background: this.state.isEnabled ? "#72d687" : "#878c88" }}
          />
        </Slider>

        <FormattedTime numSeconds={this.state.duration / 1000} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  song: state.currentSongReducer.item
});

export default connect(mapStateToProps)(PlayerSeekBar);
