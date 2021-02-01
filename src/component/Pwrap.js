import React, { Children, Component } from "react";

const Pwrap = ({ text, classType }) => {
  return <p className={`${classType}`}>{text}</p>;
};

export default Pwrap;
