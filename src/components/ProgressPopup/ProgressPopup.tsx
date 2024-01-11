import React from "react";
import "./styles.scss";

interface IProgressPopupProps {
  value: number;
}

export const ProgressPopup = ({ value = 10 }: IProgressPopupProps) => {
  return (
    <div className="progress-wrapper">
      <div className="progress-wrapper__inside">
        <div className="progress-wrapper__insideInterior">{value}%</div>
      </div>
    </div>
  );
};
