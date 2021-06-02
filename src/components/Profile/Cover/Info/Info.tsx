import React from "react";
import s from "./Info.module.css";

const Info = () => {
  return (
    <div className={s.info}>
      <h2>Allan Jackson</h2>
      <div>Birthday: </div>
      <div>City: </div>
      <div>Education: </div>
      <div>Web-site: </div>
    </div>
  );
};

export default Info;
