import React from "react";
import { Button } from "../../../../components";
import "./styles.scss";

export const Step1 = ({
  handleNextStep,
}: {
  handleNextStep: (v: number) => void;
}) => {
  return (
    <div className="step1-wrapper">
      <div className="step1-wrapper__title">
        <h2>Win an autographed basketball!</h2>
      </div>
      <div className="step1-wrapper__content">
        <div>Get started by verifying your email.</div>
        <div>Press enter below to begin.</div>
      </div>
      <Button content="send" onClick={() => handleNextStep(1)} />
    </div>
  );
};
