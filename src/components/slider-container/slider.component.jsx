import React from "react";
import {
  SliderValueContainer,
  SliderCategoryName,
  RangeSliderInput,
  RangeLevelNameDiv
} from "./slider.styles";

const Slider = ({
  name,
  inputName,
  minValue,
  maxValue,
  value,
  step,
  handleChange
}) => {
  return (
    <SliderValueContainer>
      <SliderCategoryName>{inputName}</SliderCategoryName>
      <RangeSliderInput
        type="range"
        name={name}
        min={minValue}
        max={maxValue}
        value={value}
        step={step}
        onChange={handleChange}
      ></RangeSliderInput>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <RangeLevelNameDiv>{minValue}</RangeLevelNameDiv>
        <RangeLevelNameDiv>{value}</RangeLevelNameDiv>
        <RangeLevelNameDiv>{maxValue}</RangeLevelNameDiv>
      </div>
    </SliderValueContainer>
  );
};

export default Slider;
