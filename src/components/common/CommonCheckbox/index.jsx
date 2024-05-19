import { Checkbox, Form } from "antd";
import React from "react";
import "./styles.scss";

const CommonCheckbox = ({ name }) => {
  return (
    <Form.Item name={name} valuePropName="checked">
      <Checkbox className="common-checkbox" />
    </Form.Item>
  );
};

export default CommonCheckbox;
