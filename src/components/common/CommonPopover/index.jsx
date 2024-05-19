import React from "react";
import { Images } from "../../../theme";
import { Popover } from "antd";
import "./styles.scss";

const CommonPopover = ({ guideText }) => {
  return (
    <Popover content={guideText} trigger="hover">
      <img src={Images.iIcon} />
    </Popover>
  );
};

export default CommonPopover;
