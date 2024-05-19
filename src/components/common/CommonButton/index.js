import { Button } from "antd";
import React, { Children } from "react";
import "./styles.scss";

const CommonButton = ({
  text,
  Children,
  classname,
  topClass,
  width,
  height,
  background,
  borderRadius,
  border,
  color,
  onClick,
  htmlType = "button",
  disabled,
  type = "primary",
  fontSize,
  fontWeight,
  padding,
  icon,
  loading,
  borderColor,
  borderStyle,
  marginBottom,
  marginTop,
  fontFamily,
  position,
  left,
  right,
  bottom,
  top,
  size = "middle",
}) => {
  return (
    <div className={`button-parent ${topClass || ""} `}>
      <Button
        loading={loading}
        icon={icon}
        type={type}
        size={size}
        style={{
          fontSize,
          width,
          height,
          background,
          borderRadius,
          color,
          border,
          borderStyle,
          borderColor,
          padding,
          fontWeight,
          marginBottom,
          marginTop,
          fontFamily,
          position,
          left,
          right,
          bottom,
          top,
        }}
        className={classname}
        onClick={onClick}
        htmlType={htmlType}
        disabled={disabled}
      >
        {text || Children}
      </Button>
    </div>
  );
};

export default CommonButton;
