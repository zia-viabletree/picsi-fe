import React, { useEffect } from "react";

import { Modal, Space } from "antd";
import "./styles.scss";

const CommonModal = ({
  setIsModalVisible,
  isModalVisible,
  children,
  width,
  title,
  className = "",
  destroyOnClose,
}) => {
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Modal
        destroyOnClose={destroyOnClose}
        className={`common-modal ${className}`}
        footer={null}
        width={width}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        title={title}
        centered
      >
        {children}
      </Modal>
    </div>
  );
};

export default CommonModal;
