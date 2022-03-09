import React, { useState } from "react";
import Accordion from "../Accordion/Accordion";
import { Button } from "antd";
import Popup from "../../Modal/Popup";

const AccordionSection = ({ onShow }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <Accordion />
        <Popup
          isModalVisible={isModalVisible}
          handleCancel={handleCancel}
          handleOk={handleOk}
        />
        <div style={{ margin: "20px 0px", height: "80px" }}>
          <Button
            type="primary"
            shape="round"
            size="large"
            style={{
              margin: "0px 20px",
              fontWeight: "bold",
              background: "#1E6FB0",
            }}
            onClick={onShow}
          >
            Submit
          </Button>
          <Button
            onClick={showModal}
            type="link"
            style={{ margin: "0px 20px", fontWeight: "bold", color: "#1E6FB0" }}
          >
            Clear All
          </Button>
        </div>
      </div>
    </>
  );
};

export default AccordionSection;
