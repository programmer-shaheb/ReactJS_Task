import React from "react";
import InputItem from "../InputItem/InputItem";
import SelectItem from "../SelectItem/SelectItem";
import CustomAccordion from "./CustomAccordion";
import { Radio } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

const Accordion = () => {
  return (
    <>
      <CustomAccordion title="INSURED PARTICULARS">
        <InputItem title="Insured Name" placeholder="Enter Insured name" />
        <InputItem title="NRIC" placeholder="Enter Insured NRIC" />
        <InputItem
          title="Email Address"
          placeholder="Enter Insured Email Address"
        />
        <InputItem
          title="Contact No."
          placeholder="Enter Insured Contact No."
        />
        <InputItem
          title="Date Of Birth"
          picker={true}
          placeholder="Select Insured Date Of Birth"
        />
        <InputItem title="Address" placeholder="Enter Insured Adress" />
        <InputItem title="Occupation" placeholder="Enter Insured Occupation" />
        <Title level={5} style={{ marginTop: "15px" }}>
          Gender
        </Title>
        <Radio.Group>
          <Radio value={1}>Male</Radio>
          <Radio value={2}>Female</Radio>
        </Radio.Group>
      </CustomAccordion>
      <CustomAccordion title="CLASS OF INSURANCE">
        <SelectItem
          title="Class Of Insurance"
          placeholder="Select Class Of Insurance"
        />
      </CustomAccordion>
      <CustomAccordion title="PERIOD OF INSURANCE">
        <InputItem
          title="Period Of Insurance: From"
          picker={true}
          placeholder="Select Period Of Insurance: From"
        />
        <InputItem
          title="Period Of Insurance: To"
          picker={true}
          placeholder="Select Period Of Insurance: To"
        />
      </CustomAccordion>
      <CustomAccordion title="OTHER INFORMATION (MAID DETAILS)">
        <InputItem title="Name" placeholder="Enter Maid Name" />
        <InputItem title="Passport No." placeholder="Enter Maid Passport No." />
        <InputItem
          title="Date Of Birth"
          picker={true}
          placeholder="Select Your Date Of Birth"
        />
        <SelectItem title="Nationality" placeholder="Select Maid Nationality" />
        <InputItem
          title="Work Permit No."
          placeholder="Enter Maid Work Permit No."
        />
        <InputItem
          title="Transmission No."
          placeholder="Enter Maid Transmission No."
        />
      </CustomAccordion>
    </>
  );
};

export default Accordion;
