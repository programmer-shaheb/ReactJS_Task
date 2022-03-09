import React from "react";
import { Modal } from "antd";

const Popup = ({ isModalVisible, handleCancel, handleOk }) => {
  return (
    <Modal
      title="Are You Sure?"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>
        Are you sure you want you clear all data? This action cannot be Un-Done
      </p>
    </Modal>
  );
};

export default Popup;
