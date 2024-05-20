import { Col, Row } from "antd";
import React from "react";
import { CommonButton, ImageUploader } from "../common";
import SwapLoading from "../SwapLoading";
import { Images } from "../../theme";
import "./style.scss";

const MultiFaceSwapping = ({ isShrink, result }) => {
  return (
    <Row gutter={[14, 20]} className="multi-swap-parent">
      <Col>
        <ImageUploader multi={true} name={"sourceImg"} />
      </Col>
      <Col>
        <ImageUploader multi={true} name={"sourceImg"} />
      </Col>
      <Col>
        <ImageUploader multi={true} name={"sourceImg"} />
      </Col>
      <Col>
        <ImageUploader multi={true} name={"sourceImg"} />
      </Col>
      <Col>
        <ImageUploader
          multi={true}
          placeholder={Images.targetImg}
          name={"targetImg"}
        />
      </Col>
      <Col>
        <CommonButton
          width={"130px"}
          htmlType="submit"
          topClass={"swap-btn"}
          text={"swap!"}
        />
      </Col>
      <Col>
        <SwapLoading multi={true} result={result} isShrink={isShrink} />
      </Col>
    </Row>
  );
};

export default MultiFaceSwapping;
