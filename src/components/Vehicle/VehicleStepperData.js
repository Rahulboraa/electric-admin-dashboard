import React from "react";
import Steps, { Step } from "rc-steps";
import "rc-steps/assets/index.css";

const VerticalLinearStepper = ({ setStatusModal, open }) => {
  return (
    <>
      <Steps direction="vertical" current={1}>
        <Step
          title="Application Received"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies."
        />
        <Step
          title="Confirming Documentation"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies."
        />
        <Step
          title="Application sent for review"
          description="Processing your data..."
        />
      </Steps>
    </>
  );
};

export default VerticalLinearStepper;
