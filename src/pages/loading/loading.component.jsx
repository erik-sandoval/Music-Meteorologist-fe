// modules
import React from "react";

// styles
import { LoadContainer } from "./loading.styles";

// assets
import Loader from "../../assets/loader.gif";

const LoaderContainer = () => {
  return (
    <div>
      <LoadContainer>
        <img src={Loader} alt="waiting animation" />
      </LoadContainer>
    </div>
  );
};

export default LoaderContainer;
