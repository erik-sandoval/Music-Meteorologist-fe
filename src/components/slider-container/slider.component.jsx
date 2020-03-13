import React from "react";
import {
  SliderValueContainer,
  SliderCategoryName,
  RangeSliderInput,
  RangeLevelNameDiv
} from "./slider.styles";

const Slider = ({ name, leftDescription, rightDescription, handleChange }) => {
  return (
    <SliderValueContainer>
      <SliderCategoryName>{name}</SliderCategoryName>
      <RangeSliderInput
        type="range"
        min="0"
        max="100"
        value="50"
        onChange={handleChange}
      ></RangeSliderInput>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <RangeLevelNameDiv right>{leftDescription}</RangeLevelNameDiv>
        <RangeLevelNameDiv left>{rightDescription}</RangeLevelNameDiv>
      </div>
    </SliderValueContainer>
  );
};

export default Slider;
