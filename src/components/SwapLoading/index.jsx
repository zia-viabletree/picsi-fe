import React, { useState } from "react";
import "./styles.scss";
import Images from "../../theme/Images";
import { CommonTextField } from "../common";
const SwapLoading = ({ result, isShrink, multi }) => {
  return (
    <div className={`swap-loading-parent ${multi ? "multi" : ""}`}>
      {result && (
        <div className="result-img-parent">
          <img src={result} className="result-img" />
        </div>
      )}
      <div className={`blinking-dot dot1 ${isShrink ? "animate" : ""}`}></div>
      <div className={`blinking-dot dot2 ${isShrink ? "animate" : ""}`}></div>
      <div className={`blinking-dot dot3 ${isShrink ? "animate" : ""}`}></div>
      <div className={`blinking-dot dot4 ${isShrink ? "animate" : ""}`}></div>

      <div className="content-parent">
        <div className="img-parent">
          <img className="light-logo" src={Images.mainLogo} />
          <div className={`img-content ${isShrink ? "shrink" : ""}`}>
            <img className="main-logo" src={Images.LightLogo} />
          </div>
        </div>
        <CommonTextField
          width={"170px"}
          mt={"40px"}
          fontWeight={600}
          className={"theme-text"}
          text={"Morphed Image will appear here"}
        />
      </div>
    </div>
  );
};

export default SwapLoading;
