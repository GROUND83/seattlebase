import React, { Component } from "react";
import AspectRatio from "react-aspect-ratio";
import theme from "../../styles/theme";
import { useTranslation } from "react-i18next";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SpaceNeedle from "../../assets/spaceneedle.png";
import meeting from "../../assets/meeting.png";
const Admin = () => {
  const { t, i18n } = useTranslation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const RenderContent = props => {
    return (
      <div
        className={`col-span-4 lg:col-span-4 flex flex-col ${
          props.type === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
        } bg-white items-center lg:items-start  justify-start lg:justify-between rounded-2xl overflow-hidden shadow-md`}
      >
        {props.children}
      </div>
    );
  };
  return (
    <div className="grid grid-cols-4 gap-3 lg:gap-12 m-3 ">
      {/* 1 */}

      <RenderContent>
        <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center">
          <img
            src={meeting}
            alt="meeting"
            className="w-full bg-fixed bg-center bg-cover bg-no-repeat object-contain"
          />
        </div>
        <div className="mt-3  lg:w-1/2 lg:mt-0 h-full flex flex-col items-start justify-between p-6">
          <span className="text-md lg:text-2xl font-bold text-blue-800">
            WHO WE ARE
          </span>
          <div>
            <p className="text-sm mt-1">
              We are a team of experts with decades of experience in both the
              U.S. and Korean markets. We are passionate about helping to bridge
              the gap between the two.
            </p>
            <p className="text-sm mt-1">
              We represent a diverse set of skills from business development to
              venture-capital investment to engineering, and we believe in using
              those skills to help our clients level up.
            </p>
          </div>
          <Link
            to="/about"
            className="outline-none right-1 bg-blue-800  text-white px-4 py-2 rounded-full flex flex-row items-center justify-between text-xs mt-6"
          >
            LEARN MORE
            {/* <FiArrowRight className="text-md ml-3" /> */}
          </Link>
        </div>
      </RenderContent>
    </div>
  );
};

export default Admin;
