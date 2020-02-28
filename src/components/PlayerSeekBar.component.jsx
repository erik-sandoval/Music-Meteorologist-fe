import React, { Component } from "react";
import { connect } from "react-redux";
import { Direction, Slider, FormattedTime } from "react-player-controls";

const SliderBar = ({ direction, value, style }) => <div style={style} />;
const SliderHandle = ({ direction, value, style }) => <div style={style} />;

class PlayerSeekBar extends Component {
  state = {
    isEnabled: true,
    direction: Direction.HORIZONTAL,
    position: 0,
    duration: 1
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
    console.log(this.state);
    const { duration, position } = this.state;
    const { player, song } = this.props;

    song && this.checkPlayer(player, song);
    return (
      <div>
        <FormattedTime numSeconds={this.state.position / 1000} />
        <Slider
          direction={Direction.HORIZONTAL}
          isEnabled
          onIntent={intent => console.log(`hovered at ${intent}`)}
          onIntentStart={intent =>
            console.log(`entered with mouse at ${intent}`)
          }
          onIntentEnd={() => console.log("left with mouse")}
          onChange={newValue => console.log(`clicked at ${newValue}`)}
          onChangeStart={startValue =>
            console.log(`started dragging at ${startValue}`)
          }
          onChangeEnd={endValue =>
            console.log(`stopped dragging at ${endValue}`)
          }
        >
          {/* Here we render whatever we want. Nothings is rendered by default. */}
          <SliderBar
            direction={this.state.direction}
            value={this.state.value}
            style={{ background: this.state.isEnabled ? "#72d687" : "#878c88" }}
          />
          <SliderBar
            direction={this.state.direction}
            value={this.state.lastIntent}
            style={{ background: "rgba(0, 0, 0, 0.05)" }}
          />
          <SliderHandle
            direction={this.state.direction}
            value={this.state.value}
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
