import React, { Component } from "react";
import Slider from "./slider.component";
import { SliderContainerDiv } from "./slider.styles";

class SliderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SliderContainerDiv>
        <Slider></Slider>
      </SliderContainerDiv>
    );
  }
}

export default SliderContainer;
