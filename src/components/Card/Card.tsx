import React, { ReactNode } from "react";
import "./styles.scss";
import CheckIcon from "../../assets/Check.svg";

interface ICardProps {
  children: ReactNode;
  isCompleted?: boolean;
  isNew?: boolean;
  isDisabled?: boolean;
}

export const Card = ({
  children,
  isCompleted = false,
  isNew = false,
  isDisabled = false,
}: ICardProps) => {
  return (
    <div className={`card-wrapper${isDisabled ? "__disabled" : ""}`}>
      {children}
      {!!isCompleted ? (
        <div>
          <img src={CheckIcon} alt="" />
        </div>
      ) : null}
      {!!isNew ? (
        <div>
          <div className="card-wrapper__new">NEW</div>
        </div>
      ) : null}
    </div>
  );
};
