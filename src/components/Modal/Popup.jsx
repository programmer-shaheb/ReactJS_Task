import React from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";

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

Popup.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleOk: PropTypes.func.isRequired,
};

export default Popup;
