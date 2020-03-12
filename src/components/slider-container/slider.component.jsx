import React from "react";
import {
  SliderValueContainer,
  SliderCategoryName,
  RangeSliderInput,
  RangeLevelNameDiv
} from "./slider.styles";

const Slider = () => {
  return (
    <SliderValueContainer>
      <SliderCategoryName>Mood</SliderCategoryName>
      <RangeSliderInput
        type="range"
        min="0"
        max="100"
        value="50"
      ></RangeSliderInput>
      <RangeLevelNameDiv>Sad</RangeLevelNameDiv>
      <RangeLevelNameDiv>Happy</RangeLevelNameDiv>
    </SliderValueContainer>
  );
};

export default Slider;
