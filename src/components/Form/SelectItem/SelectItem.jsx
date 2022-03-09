import React from "react";
import { Select } from "antd";
import { Typography } from "antd";
import PropTypes from "prop-types";

const { Option } = Select;
const { Title } = Typography;

const SelectItem = ({ title, placeholder }) => {
  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <Title level={5}>{title}</Title>
        <Select
          style={{
            width: "100%",
            border: "2px solid black",
            borderRadius: "5px",
            padding: "1px",
          }}
          showSearch
          placeholder={placeholder}
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="Demo">Demo</Option>
          <Option value="Demo">Demo</Option>
          <Option value="Demo">Demo</Option>
        </Select>
      </div>
    </>
  );
};

SelectItem.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SelectItem;
