import React from "react";

const VehicleStepper = () => {
  return (
    <>
      <Stepper activeStep={1}>
        <Step label="Children Step 1" />
        <Step label="Children Step 2" />
        <Step label="Children Step 3" />
      </Stepper>
    </>
  );
};

export default VehicleStepper;
