import React from "react";
import { PulseLoader } from "react-spinners";
import "./styles.scss";

const Loader = ({
  color = "#4b0082",
  height = "100vh",
  background = "transparent",
  size = 16,
}) => {
  return (
    <div
      className="loader-wrapper"
      style={{
        height,
        background,
      }}
    >
      <PulseLoader size={size} color={color} />
    </div>
  );
};

export default Loader;
