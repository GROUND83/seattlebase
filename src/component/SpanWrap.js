import React, { Children, Component } from "react";

const SpanWrap = ({ text, classType }) => {
  return <span className={`${classType}`}>{text}</span>;
};

export default SpanWrap;
