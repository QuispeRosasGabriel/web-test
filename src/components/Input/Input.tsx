import React, { InputHTMLAttributes } from "react";
import "./styles.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = (props) => {
  return <input type="text" className="input" {...props} />;
};
