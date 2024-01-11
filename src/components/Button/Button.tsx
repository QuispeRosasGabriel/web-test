import React from "react";
import "./styles.scss";

interface IButtonProps {
  content: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({
  content,
  onClick,
  disabled = false,
}: IButtonProps) => {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};
