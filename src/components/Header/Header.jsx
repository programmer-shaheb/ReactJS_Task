import React from "react";
import { Typography } from "antd";
import PropTypes from "prop-types";
import classes from "./Header.module.css";

const { Title } = Typography;

const Header = () => {
  return (
    <>
      <div className={classes.header_layout}>
        <div className={classes.header_img}>
          <img src="img/img1.png" alt="" />
        </div>
        <div className={classes.header_text}>
          <Title level={2} className={classes.title}>
            AWG INSURANCE BROKERS PTE LTD
          </Title>
          <Title level={4} className={classes.subtitle}>
            我 们 提 供 完 善 的 设 计 原 则
          </Title>
          <Title level={5} className={classes.paragraph}>
            BUSINESS REGISTRATION NO: 199002234G GST NO: 199002234G 240
            Macpherson Road #08-01, Pines Building, Singapore 348574 Tel: 65
            6294 6688 / Fax: 65 6282 6188 / Email: awg@awginsurance.com
          </Title>
        </div>
      </div>
    </>
  );
};

export default Header;
