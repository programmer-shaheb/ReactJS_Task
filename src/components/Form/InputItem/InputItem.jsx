import React from "react";
import { Input } from "antd";
import { Typography } from "antd";
import { DatePicker } from "antd";
import PropTypes from "prop-types";

const { Title } = Typography;

const InputItem = ({ title, picker, placeholder }) => {
  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <Title level={5}>{title}</Title>
        {!picker ? (
          <Input
            placeholder={placeholder}
            style={{
              border: "2px solid black",
              borderRadius: "5px",
              padding: "15px",
            }}
          />
        ) : (
          <DatePicker
            placeholder={placeholder}
            style={{
              width: "100%",
              border: "2px solid black",
              borderRadius: "5px",
              padding: "15px",
            }}
          />
        )}
      </div>
    </>
  );
};

InputItem.propTypes = {
  title: PropTypes.string.isRequired,
  picker: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
};

export default InputItem;
