import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "./slider.component";
import {
  InnerSliderContainerDiv,
  OuterSliderContainerDiv,
  GetNewSongsButton
} from "./slider.styles";
const example = {
  audio_features: {
    time_signature: 4,
    speechiness: 0.0486,
    acousticness: 0.961,
    danceability: 0.62,
    tempo: 104.853,
    loudness: -23.873,
    mode: 1,
    popularity: 31,
    valence: 0.053,
    key: 11,
    liveness: 0.0741,
    instrumentalness: 0.911,
    energy: 0.231
  }
};

const example2 = {
  audio_features: {
    time_signature: 4,
    speechiness: 0.0486,
    acousticness: 0.961,
    danceability: 0.62,
    tempo: 104.853,
    loudness: -23.873,
    mode: 1,
    popularity: 31,
    valence: 0.053,
    key: 11,
    liveness: 0.0741,
    instrumentalness: 0.911,
    energy: 0.231
  }
};
class SliderContainer extends Component {
  state = {
    danceability: 0.431,
    energy: 0.44,
    key: 7,
    loudness: -10.288,
    mode: 1,
    speechiness: 0.033,
    acousticness: 0.0515,
    instrumentalness: 0.868,
    liveness: 0.234,
    valence: 0.0384,
    tempo: 76.883,
    popularity: 50,
    time_signature: 4
  };

  handleChange = e => {
    console.log(e);
    this.setState({
      ...this.state
    });
  };
  render() {
    return (
      <OuterSliderContainerDiv>
        <InnerSliderContainerDiv>
          <Slider
            name="Mood"
            leftDescription="Sad"
            rightDescription="Happy"
          ></Slider>
          <Slider
            name="Danceability"
            leftDescription="Not Danceable"
            rightDescription="Danceable"
          ></Slider>
          <Slider
            name="Intensity"
            leftDescription="Laid-back"
            rightDescription="Energetic"
          ></Slider>
          <Slider
            name="Tempo"
            leftDescription="Mellow"
            rightDescription="Fast"
          ></Slider>
          <Slider
            name="Instrumentalness"
            leftDescription="Vocals"
            rightDescription="Instrumentals"
          ></Slider>
          <Slider
            name="Speechiness"
            leftDescription="Musical"
            rightDescription="Speech"
          ></Slider>
          <Slider
            name="Liveness"
            leftDescription="Studio"
            rightDescription="Live"
          ></Slider>
          <Slider
            name="Loudness"
            leftDescription="Quiet"
            rightDescription="Loud"
          ></Slider>
        </InnerSliderContainerDiv>
        <GetNewSongsButton>Generate New Songs</GetNewSongsButton>
      </OuterSliderContainerDiv>
    );
  }
}

const mapStateToProps = state => ({
  songFeatures: state.chartInfo
});

export default connect(mapStateToProps)(SliderContainer);
