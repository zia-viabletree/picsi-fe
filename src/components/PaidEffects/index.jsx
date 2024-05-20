import React, { useState } from "react";
import { paidEffects, PRICE_PLAN } from "../../constants";
import { Col, Row, Slider } from "antd";
import {
  CommonButton,
  CommonCheckbox,
  CommonModal,
  CommonPopover,
  CommonTextField,
} from "../common";
import "./styles.scss";
import { Images } from "../../theme";
import { useNavigate } from "react-router-dom";

const PaidEffects = () => {
  const [premium, setPremium] = useState(false);
  const navigate = useNavigate();

  return (
    <Row gutter={[20, 10]} className="paid-effect-parent">
      {paidEffects.map((t) => (
        <Col key={Math.random()}>
          <div className="effect">
            <div className="effect-content">
              <CommonCheckbox name={t.name} />
              <CommonTextField
                className={"white-text"}
                fontWeight={500}
                text={t.title}
              />
            </div>
            {t.range && <Slider className="common-slider" defaultValue={30} />}
            <div className="paid-icon">
              <CommonPopover guideText={t.guideText} />
              <img
                src={Images.paidIcon}
                onClick={() => setPremium(true)}
                className="c-p"
              />
            </div>
          </div>
        </Col>
      ))}
      <CommonModal isModalVisible={premium} setIsModalVisible={setPremium}>
        <CommonTextField
          textAlign={"center"}
          fontSize={"28px"}
          lineHeight={"38px"}
          className={"theme-text"}
          fontWeight={700}
          text={"Unlock Premium Face Swapping Features Subscribe Now!"}
        />
        <CommonTextField
          textAlign={"center"}
          mt={"20px"}
          mb={"40px"}
          fontSize={"16px"}
          fontWeight={500}
          text={
            "This feature is available for paid subscribers. Upgrade now by subscribing with Patreon or Stripe above to enjoy full access!"
          }
        />
        <CommonButton text={"upgrade"} onClick={() => navigate(PRICE_PLAN)} />
      </CommonModal>
    </Row>
  );
};

export default PaidEffects;
