import { Col, Row } from "antd";
import React from "react";
import { CommonButton, ImageUploader } from "../common";
import SwapLoading from "../SwapLoading";
import { Images } from "../../theme";
import "./style.scss";

const FaceSwapping = ({ isShrink, result }) => {
  return (
    <Row gutter={[20, 20]} className="swap-parent">
      <Col xs={24} sm={24} md={24} lg={7} xxl={7}>
        <ImageUploader name={"sourceImg"} />
      </Col>
      <Col xs={24} sm={24} md={24} lg={7} xxl={7}>
        <ImageUploader placeholder={Images.targetImg} name={"targetImg"} />
      </Col>
      <Col xs={24} sm={24} md={24} lg={3} xxl={3}>
        <CommonButton htmlType="submit" topClass={"swap-btn"} text={"swap!"} />
      </Col>
      <Col xs={24} sm={24} md={24} lg={7} xxl={7}>
        <SwapLoading result={result} isShrink={isShrink} />
      </Col>
    </Row>
  );
};

export default FaceSwapping;
