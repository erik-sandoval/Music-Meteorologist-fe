import styled from "styled-components";

export const SliderContainerDiv = styled.div`
  position: absolute;
  width: 1063px;
  height: 324px;
  left: 377px;
  top: 84px;
`;

export const SliderValueContainer = styled.div`
  width: 186px;
  height: 68px;
  left: 1152px;
  top: 219px;
`;

export const SliderCategoryName = styled.div`
  width: 39px;
  height: 16px;
  left: 482px;
  top: 128px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;
`;

export const RangeSliderInput = styled.input`
  appearance: none;
  width: 179px;
  height: 12px;
  background: #a7d6f2;
  border-radius: 10px;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
  }
`;

export const RangeLevelNameDiv = styled.div`
  width: 26px;
  height: 14px;
  left: 480px;
  top: 182px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: ${props=> props.textAlign};
  color: #ffffff;
  opacity: 0.7;
`;
