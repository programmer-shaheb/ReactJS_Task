import React from "react";
import classes from "./Successful.module.css";
import { Typography } from "antd";
import { Button } from "antd";

const { Title } = Typography;

const Successful = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="img/img3.png" alt="" />
      </div>
      <div className={classes.text}>
        <Title level={2}>Form Submitted Successfully</Title>
        <Title level={3} className={classes.subtext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Title>
        <Button
          type="primary"
          shape="round"
          size="large"
          style={{
            margin: "0px 20px",
            fontWeight: "bold",
            background: "#1E6FB0",
          }}
        >
          Button Default
        </Button>
      </div>
    </div>
  );
};

export default Successful;
