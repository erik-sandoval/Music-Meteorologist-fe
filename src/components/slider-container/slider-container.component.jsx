import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "./slider.component";
import {
  InnerSliderContainerDiv,
  OuterSliderContainerDiv,
  GetNewSongsButton
} from "./slider.styles";

class SliderContainer extends Component {
  state = {
    danceability: 0,
    energy: 0,
    key: 0,
    loudness: 0,
    mode: 0,
    speechiness: 0,
    acousticness: 0,
    instrumentalness: 0,
    liveness: 0,
    valence: 0,
    tempo: 0,
    popularity: 0,
    time_signature: 0
  };

  componentWillReceiveProps() {
    this.setState({
      danceability: this.props.songFeatures.danceability,
      energy: this.props.songFeatures.energy,
      key: this.props.songFeatures.key,
      loudness: this.props.songFeatures.loudness,
      mode: this.props.songFeatures.mode,
      speechiness: this.props.songFeatures.speechiness,
      acousticness: this.props.songFeatures.acousticness,
      instrumentalness: this.props.songFeatures.instrumentalness,
      liveness: this.props.songFeatures.liveness,
      valence: this.props.songFeatures.valence,
      tempo: this.props.songFeatures.tempo,
      popularity: this.props.songFeatures.popularity,
      time_signature: this.props.songFeatures.time_signature
    });
  }

  handleChange = e => {
    e.persist();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };
  render() {
    console.log(this.state);
    const acousticFeatures = [
      {
        name: "acousticness",
        inputName: "Acousticness",
        minValue: 0.0,
        maxValue: 1.0,
        value: this.state.acousticness,
        step: 0.01
      },
      {
        name: "danceability",
        inputName: "Danceability",
        minValue: 0.0,
        maxValue: 1.0,
        value: this.state.danceability,
        step: 0.01
      },
      {
        name: "energy",
        inputName: "Energy",
        minValue: 0.0,
        maxValue: 1.0,
        value: this.state.energy,
        step: 0.01
      },
      {
        name: "instrumentalness",
        inputName: "Instrumentalness",
        minValue: 0.0,
        maxValue: 1.0,
        value: this.state.instrumentalness,
        step: 0.01
      },
      {
        name: "key",
        inputName: "Key",
        minValue: 0,
        maxValue: 11,
        value: this.state.key,
        step: 1
      },
      {
        name: "liveness",
        inputName: "Liveness",
        minValue: 0.0,
        maxValue: 1.0,
        value: this.state.liveness,
        step: 0.01
      },
      {
        name: "loudness",
        inputName: "Loudness",
        minValue: -60,
        maxValue: 0,
        value: this.state.loudness,
        step: 1
      },
      {
        name: "mode",
        inputName: "Mode",
        minValue: 0,
        maxValue: 1,
        value: this.state.mode,
        step: 1
      },
      {
        name: "popularity",
        inputName: "Popularity",
        minValue: 0,
        maxValue: 100,
        value: this.state.popularity,
        step: 1
      },
      {
        name: "speechiness",
        inputName: "Speechiness",
        minValue: 0.0,
        maxValue: 1.0,
        value: this.state.speechiness,
        step: 0.01
      },
      {
        name: "tempo",
        inputName: "Tempo",
        minValue: 50,
        maxValue: 200,
        value: this.state.tempo,
        step: 1
      },
      {
        name: "time_signature",
        inputName: "Time Signature",
        minValue: 2,
        maxValue: 4,
        value: this.state.time_signature,
        step: 1
      },
      {
        name: "valence",
        inputName: "Valence",
        minValue: 0.0,
        maxValue: 1.0,
        value: this.state.valence,
        step: 0.01
      }
    ];

    return (
      <OuterSliderContainerDiv>
        <InnerSliderContainerDiv>
          {acousticFeatures.map(
            ({ name, inputName, minValue, maxValue, value, step }) => (
              <Slider
                key={name}
                name={name}
                inputName={inputName}
                minValue={minValue}
                maxValue={maxValue}
                value={value}
                step={step}
                handleChange={this.handleChange}
              ></Slider>
            )
          )}
        </InnerSliderContainerDiv>
        <GetNewSongsButton>Generate New Songs</GetNewSongsButton>
      </OuterSliderContainerDiv>
    );
  }
}

const mapStateToProps = state => ({
  songFeatures: state.chartInfo
});

export default connect(mapStateToProps, {})(SliderContainer);
