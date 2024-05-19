import React from "react";
import { PriceCard } from "../../../components";
import { Col, Row } from "antd";
import { pricePlan } from "../../../constants";
import "./styles.scss";

const PricePlan = () => {
  return (
    <div className="price-plan-parent">
      <Row gutter={[20, 20]}>
        {pricePlan.map((t) => (
          <Col key={Math.random()} lg={6} md={12}>
            <PriceCard
              title={t.title}
              price={t.price}
              content={t.content}
              list={t.detailList}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PricePlan;
