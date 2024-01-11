import React, { useState } from "react";
import { Input } from "../../components";
import Logo from "../../assets/Logo.png";
import "./styles.scss";
import { Step1, Step2, Step3 } from "./steps";
import { StepOption } from "../../utils";
import { LocalStorageService } from "../../services";

export const Home = () => {
  const [currentStep, setCurrentStep] = useState<number>(
    Number(LocalStorageService.getInstance().getItem<string>("lastSeenStep")) ??
      2
  );

  const handleNextStep = (nextStep: number) => {
    setCurrentStep(nextStep);
  };

  return (
    <div className="box-wrapper">
      <div className="box-wrapper__logo">
        <img src={Logo} alt="" />
      </div>
      {(() => {
        switch (currentStep) {
          case StepOption.Step1:
            return <Step1 handleNextStep={handleNextStep} />;
          case StepOption.Step2:
            return <Step2 handleNextStep={handleNextStep} />;
          case StepOption.Step3:
            return <Step3 handleNextStep={handleNextStep} />;
          default:
            return <div>Render default content</div>;
        }
      })()}
    </div>
  );
};
