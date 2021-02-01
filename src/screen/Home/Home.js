import React, { Component } from "react";
import AspectRatio from "react-aspect-ratio";
import theme from "../../styles/theme";
import { useTranslation } from "react-i18next";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SpaceNeedle from "../../assets/spaceneedle.png";
import meeting from "../../assets/meeting.png";
const Home = () => {
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
      <div className="relative col-span-4 flex flex-col bg-white items-center justify-center rounded-2xl overflow-hidden shadow-md">
        <div className="w-full aspect-w-16 aspect-h-9 ">
          <img
            alt="seattle"
            src={SpaceNeedle}
            className="w-full bg-center bg-cover bg-no-repeat object-contain"
          />
        </div>
        <div className="absolute p-6 flex flex-col items-start lg:items-center justify-center">
          <p className="text-md lg:text-xl text-white">{t("maintitle")}</p>
          <Link
            to="/partners"
            className="outline-none right-1 bg-blue-800 text-white px-4 lg:px-6 py-2 lg:py-4 rounded-full flex flex-row items-center justify-between text-xs lg:text-md mt-6"
          >
            LEARN ABOUT OUR PROJECT
            {/* <FiArrowRight className="text-md ml-3" /> */}
          </Link>
        </div>
      </div>
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

      {/* 2 */}
      <RenderContent type="right">
        <div className=" lg:w-1/2  bg-white flex flex-col items-center justify-center">
          <img
            src={meeting}
            alt="meeting"
            className="w-full bg-fixed bg-center bg-cover bg-no-repeat object-contain"
          />
        </div>
        <div className="lg:w-1/2 h-full mt-3 flex flex-col items-start justify-between p-6">
          <span className="text-md lg:text-2xl font-bold text-blue-800">
            WHAT WE DO
          </span>
          <p className="text-sm mt-1">
            Whether you represent a brand new startup or one of the largest
            corporations in the world, we provide a bespoke experience catered
            to your needs. Some of our offerings include:
          </p>
          <ul className="text-sm mt-1 list-disc px-6">
            <li className="">Expert product & market-fit consultations</li>
            <li>Investment preparation & networking</li>
            <li>U.S. entity establishment and operations</li>
            <li>Corporate strategy seminars</li>
            <li>Human-capital development training</li>
          </ul>
          <Link
            to="/services"
            className="outline-none right-1 bg-blue-800  text-white px-4 py-2 rounded-full flex flex-row items-center justify-between text-xs mt-6"
          >
            LEARN MORE
            {/* <FiArrowRight className="text-md ml-3" /> */}
          </Link>
        </div>
      </RenderContent>
      {/* 3 */}
      <RenderContent>
        <div className="lg:w-1/2  bg-white flex flex-col items-center justify-center">
          <img
            src={meeting}
            alt="meeting"
            className="w-full bg-fixed bg-center bg-cover bg-no-repeat object-contain"
          />
        </div>
        <div className="  lg:w-1/2 mt-3 flex flex-col items-start p-6">
          <span className="text-md lg:text-2xl font-bold text-blue-800">
            WHY SEATTLE
          </span>
          <p className="text-sm mt-1">
            Seattle is the thriving, dynamic home of many of the global leaders
            in the technology industry. Famously the birthplace of Microsoft and
            Amazon, corporate giants like T-Mobile, Starbucks, Costco, and
            Expedia are also headquartered here. Every leader in the industry
            has a growing presence in Seattle, including Facebook, Apple,
            Google, and a host of others.
          </p>
          <p className="text-sm mt-1">
            This innovative environment means that Seattle is full of some of
            the brightest talents in the field, bringing a wealth of experience
            in business consulting, market research, investment know-how, and
            engineering savvy. It is this remarkable human capital that truly
            makes Seattle special.
          </p>
        </div>
      </RenderContent>
      {/* 4 */}
      <RenderContent type="right">
        <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center">
          <img
            src={meeting}
            alt="meeting"
            className="w-full bg-fixed bg-center bg-cover bg-no-repeat object-contain"
          />
        </div>
        <div className="lg:w-1/2 mt-3 flex flex-col items-start p-6">
          <span className="text-md lg:text-2xl font-bold text-blue-800">
            PARTNERS
          </span>
          <p className="text-sm mt-1">
            Our strength is in our partnerships, both in Seattle and in Korea.
          </p>
          <div className="mt-3 flex flex-row items-center justify-between w-full">
            <div
              style={{ width: "20vw", marginRight: 5 }}
              className="flex flex-col items-center justify-center bg-gray-100 h-32"
            >
              logo
            </div>
            <div
              style={{ width: "20vw", marginRight: 5 }}
              className="flex flex-col items-center justify-center  bg-gray-100 h-32"
            >
              logo
            </div>
            <div
              style={{ width: "20vw", marginRight: 5 }}
              className="flex flex-col items-center justify-center  bg-gray-100 h-32"
            >
              logo
            </div>
            <div
              style={{ width: "20vw", marginRight: 5 }}
              className="flex flex-col items-center justify-center bg-gray-100 h-32"
            >
              logo
            </div>
          </div>
          <Link
            to="/partners"
            className="outline-none right-1 bg-blue-800  text-white px-4 py-2 rounded-full flex flex-row items-center justify-between text-xs mt-6"
          >
            VIEW OUR PAST PROJECT
            {/* <FiArrowRight className="text-md ml-3" /> */}
          </Link>
        </div>
      </RenderContent>
    </div>
  );
};

export default Home;
