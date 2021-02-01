import React, { Component } from "react";
import AspectRatio from "react-aspect-ratio";
import theme from "../../styles/theme";
import { useTranslation } from "react-i18next";
import { FiArrowRight } from "react-icons/fi";

import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai";
import Modal from "../../component/Modal";

const Company = () => {
  const { t, i18n } = useTranslation();
  const [ModalVisible, setModalVisible] = React.useState(false);
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const RenderContent = ({ title, onClick }) => {
    return (
      <div
        className="col-span-1 flex flex-col bg-white items-center justify-center rounded-xl shadow-md relative px-3"
        style={{ height: 250 }}
      >
        <div onClick={() => onClick()}>
          <AiOutlinePlusCircle className="text-2xl  absolute top-3 right-3  text-gray-400" />
        </div>
        <p className="text-lg font-bold  text-center">{title}</p>
      </div>
    );
  };
  const ModalContent = ({ title, subcontent, image }) => {
    return (
      <div className="flex flex-col items-center ">
        <div onClick={() => onModalClose()}>
          <AiOutlineCloseCircle className="text-2xl  absolute top-3 right-3  text-black" />
        </div>
        {image && (
          <div
            alt={`${title}`}
            style={{
              width: "100%",
              height: 200,
              backgroundColor: theme.GRAY_04,
            }}
          />
        )}
        <div className="p-6">
          <span className={`font-bold ${image ? "mt-2" : "mt-1"}`}>
            {title}
          </span>
          <p className="mt-1">{subcontent}</p>
        </div>
      </div>
    );
  };
  const onModalClick = value => {
    setModalVisible(true);
    setValue(value);
  };
  const onModalClose = () => {
    setModalVisible(false);
    setValue(0);
  };
  return (
    <div className="w-full">
      <div className="w-full flex flex-col bg-gray-200 items-center justify-center p-6 ">
        <p className="text-lg font-bold">COMPANIES</p>
        <p className="text-sm mt-3">업데이트 중....</p>
      </div>
      {/* 
      <div className="grid grid-cols-2 gap-3 p-6">
        <RenderContent
          title="PRODUCT DEVELOPMENT"
          onClick={() => onModalClick(1)}
        />

        <RenderContent
          title="INVESTMENT PREPARATION & NETWORKING"
          onClick={() => onModalClick(2)}
        />
        <RenderContent
          title="SHELL COMPANY SETUP"
          onClick={() => onModalClick(3)}
        />
        <RenderContent
          title="WORKSHOPS & HACKATHONS"
          onClick={() => onModalClick(4)}
        />
        <RenderContent
          title="LEGAL BUSINESS ENTITY SETUP"
          onClick={() => onModalClick(5)}
        />
      </div> */}

      {/* <div className="flex flex-col bg-gray-100 items-center justify-center p-6 mt-3 w-full">
        <p className="">
          Our services are customized to fit the needs of our clients. Please
          get in touch with us so that we may address your specific business
          requirements.
        </p>
        <button className="outline-none right-1 bg-gray-200 p-3 rounded-md flex flex-row items-center justify-between text-xs mt-6">
          CONTACT US
          <FiArrowRight className="text-md ml-3" />
        </button>
      </div>
      <div className="flex flex-col bg-gray-100 items-center justify-center p-6 mt-3 w-full">
        <p className="text-lg font-bold">PROJECTS & PARTNERSHIPS</p>
        <p className="mt-3">
          Follow the link to learn more about the partners we work with and
          review some of the projects we’ve completed.
        </p>
        <button className="outline-none right-1 bg-gray-200 p-3 rounded-md flex flex-row items-center justify-between text-xs mt-6">
          VIEW OUR PAST PROJECTS
          <FiArrowRight className="text-md ml-3" />
        </button>
      </div> */}
    </div>
  );
};

export default Company;
