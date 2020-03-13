import styled from "styled-components";

export const OuterSliderContainerDiv = styled.div`
  height: 450px;
  background: #1c1e22;
  display: flex;
  flex-direction: column;
  width: 1063px;
  align-items: center;
`;

export const InnerSliderContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1063px;
  height: 324px;
  background: #1c1e22;
  justify-content: center;
  align-items: center;
`;

export const SliderValueContainer = styled.div`
  margin-right: 5%;
  width: 186px;
  height: 68px;
  left: 1152px;
  top: 219px;

  &:nth-of-type(4n + 4) {
    margin-right: 0;
  }
`;

export const SliderCategoryName = styled.div`
  width: 39px;
  height: 16px;
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
  height: 8px;
  background: #a7d6f2;
  border-radius: 10px;
  margin: 18% 0 5% 0;

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
  height: 14px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  color: #ffffff;
  opacity: 0.7;
`;

export const GetNewSongsButton = styled.button`
  margin-top: 2%;
  width: 180px;
  height: 55px;
  background: #e20351;
  border-radius: 6px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  border: none;
`;
