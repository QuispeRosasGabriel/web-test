import { useState } from "react";
import { Card, ProgressPopup } from "../../components";
import { cardsData } from "../../mocks/activitiesData";
import "./styles.scss";

export const Activities = () => {
  return (
    <div className="activities-wrapper">
      <div className="activities-wrapper__first-col">
        <div className="activities-wrapper__first-col-title">Enter to win</div>
        <div className="activities-wrapper__first-col-subtitle">
          2 Superbowl LVIII tickets
        </div>
        <div className="activities-wrapper__first-col-content">
          Complete any five items for a chance to win. One winner will be
          selected on December 30, 2023.
        </div>
        <ProgressPopup value={20} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          width: "100%",
        }}
      >
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};
