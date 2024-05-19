import React from "react";
import "./styles.scss";
import { CommonButton, CommonTextField } from "../common";

const PriceCard = ({ title, price, content, list }) => {
  return (
    <div className="price-card-parent">
      <div className="title">
        <CommonTextField
          fontWeight={600}
          className={"white-text"}
          text={title}
        />
        <CommonTextField
          fontWeight={600}
          className={"white-text"}
          text={price}
        />
      </div>
      <CommonTextField
        mt={"15px"}
        mb={"15px"}
        fontWeight={600}
        className={"theme-text"}
        text={content}
      />
      <ul>
        {list?.map((t) => (
          <li key={Math.random()}>
            <CommonTextField
              fontWeight={500}
              className={"theme-text"}
              text={t}
            />
          </li>
        ))}
      </ul>
      <div className="price-btn">
        <CommonButton text={"Get Now"} />
      </div>
    </div>
  );
};

export default PriceCard;
