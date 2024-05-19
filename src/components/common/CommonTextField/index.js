import React from "react";
import "./styles.scss";
import { AppStyles } from "../../../theme";

const CommonTextField = ({
  topClass,
  text,
  children,
  font,
  fontSize,
  color,
  mb = 0,
  mt = 0,
  onClick,
  textAlign,
  fontWeight,
  fontFamily,
  letterSpacing,
  textDecoration,
  paddingLeft,
  className,
  title,
  lineHeight,
  opacity,
  width,
  margin = 0,
  paddingTop,
  whiteSpace = "pre-wrap",
  wordBreak = "break-word",
  textTransform,
}) => {
  return (
    <div className={`${topClass || ""} paragraph-parent`}>
      <p
        title={title}
        className={`${className || ""} ${onClick ? "c-pointer" : ""}`}
        style={{
          margin: margin,
          padding: 0,
          fontFamily: font,
          fontSize,
          color,
          marginBottom: mb,
          marginTop: mt,
          textAlign,
          fontFamily,
          fontWeight,
          letterSpacing: letterSpacing,
          lineHeight,
          paddingLeft,
          paddingTop,
          textDecoration,
          whiteSpace,
          opacity,
          width,
          wordBreak,
          textTransform,
        }}
        onClick={onClick}
      >
        {text || children}
      </p>
    </div>
  );
};

export default CommonTextField;
