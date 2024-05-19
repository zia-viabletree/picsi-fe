import React from "react";
import "./styles.scss";
import { freeEffects } from "../../constants";
import { Col, Row } from "antd";
import { CommonCheckbox, CommonPopover, CommonTextField } from "../common";

const Effects = () => {
  return (
    <Row gutter={[20, 10]} className="effect-parent">
      {freeEffects.map((t) => (
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
            <CommonPopover guideText={t.guideText} />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Effects;
