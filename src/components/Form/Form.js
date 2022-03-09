import React from "react";
import { Typography } from "antd";
import classes from "./Form.module.css";
import "antd/dist/antd.css";
import SelectItem from "./SelectItem/SelectItem";
import AccordionSection from "./AccordionSection/AccordionSection";

const { Title } = Typography;

const Form = ({ onSubmit }) => {
  return (
    <>
      <div className={classes.form_layout}>
        <div className={classes.form_text}>
          <Title level={1} className={classes.form_title}>
            INQUIRY FORM
          </Title>
          <Title level={4} className={classes.form_subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Title>
        </div>
        <SelectItem title="Inquiry Type" placeholder="Select Inquiry Type" />
        <AccordionSection onShow={onSubmit} />
      </div>
    </>
  );
};

export default Form;
