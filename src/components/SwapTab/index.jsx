import React, { useState } from "react";
import "./styles.scss";
import { Col, Row } from "antd";
import { CommonButton, CommonModal, CommonTextField } from "../common";
import { Images } from "../../theme";
import { useNavigate } from "react-router-dom";
import { PRICE_PLAN } from "../../constants";

const SwapTab = ({ active, setActive }) => {
  const [credit, setCreditLimit] = useState(false);
  const navigate = useNavigate();

  return (
    <Row gutter={[20, 20]} className="swapping-tabs-parent">
      <Col lg={18} md={18} sm={24} xs={24} className="swapping-tabs">
        <div
          className={`tab1 tab ${active === "1" ? "active" : "un-active"}`}
          onClick={() => setActive("1")}
        >
          <CommonTextField fontWeight={600} text={"Face Swapping"} />
        </div>
        <div
          className={`tab2 tab ${active === "2" ? "active" : "un-active"}`}
          onClick={() => setActive("2")}
        >
          <CommonTextField fontWeight={600} text={"Multi-Face Swapping"} />
          <img src={Images.paidIcon} />
        </div>
      </Col>
      <Col lg={6} md={6} sm={24} xs={24} className="credits-parent">
        <div
          className="credits"
          onClick={() => {
            setCreditLimit(true);
          }}
        >
          <CommonTextField
            fontWeight={600}
            className={"white-text"}
            text={"50 credits available"}
          />
        </div>
      </Col>
      <CommonModal isModalVisible={credit} setIsModalVisible={setCreditLimit}>
        <CommonTextField
          textAlign={"center"}
          fontSize={"28px"}
          lineHeight={"38px"}
          className={"theme-text"}
          fontWeight={700}
          text={"Daily Credit Limit Reached Upgrade for Unlimited Access!"}
        />
        <CommonTextField
          textAlign={"center"}
          mt={"20px"}
          mb={"40px"}
          fontSize={"16px"}
          fontWeight={500}
          text={
            "You've used all your credits for today. Come back tomorrow or upgrade your subscription for more credits and features!"
          }
        />
        <CommonButton text={"upgrade"} onClick={() => navigate(PRICE_PLAN)} />
      </CommonModal>
    </Row>
  );
};

export default SwapTab;
