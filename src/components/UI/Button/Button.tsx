import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from "./Button.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonPropsType = DefaultButtonPropsType & {
  className: string;
  red?: boolean;
};

export const Button: React.FC<ButtonPropsType> = ({
  className,
  red,
  ...restProps
}) => {
  const finalClassName = `${red ? s.red : s.default} ${className}`;
  return <button className={finalClassName} {...restProps} />;
};
