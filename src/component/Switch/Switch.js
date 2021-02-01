import React from "react";
import "./switch.css";
import theme from "../../styles/theme";

const Switch = ({ isOn, handleToggle, desk }) => {
  return (
    <div className={`${!desk && "absolute top-2 right-2"}`}>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn ? theme.GRAY_06 : theme.GRAY_05 }}
        className={`react-switch-label flex flex-row items-center ${
          isOn ? "justify-start" : "justify-end"
        }`}
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
        <p className={`${isOn ? "ml-2" : "mr-2"}`}>{isOn ? "EN" : "KO"}</p>
      </label>
    </div>
  );
};

export default Switch;
