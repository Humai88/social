import React, { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.scss";

type DefaultImgPropsType = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;
export const Avatar: React.FC<DefaultImgPropsType> = ({
  className,
  src,
  alt,
  ...restProps
}) => {
  const finalImgClassName = `${styles.avatar} ${className ? className : ""}`;
  return (
    <img className={finalImgClassName} alt={alt} src={src} {...restProps} />
  );
};
