import React, { Component } from "react";
import AspectRatio from "react-aspect-ratio";
import theme from "../../styles/theme";
import { useTranslation } from "react-i18next";
import { FiArrowRight } from "react-icons/fi";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai";
import Modal from "../../component/Modal";
const Service = () => {
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
    <div className="grid grid-cols-4 gap-3 m-3 ">
      <div className="col-span-4 flex flex-col bg-white items-center justify-center p-6 rounded-2xl shadow-md">
        <p className="text-lg font-bold">OUR SERVICES</p>
        <p className="text-sm mt-3">
          We offer a range of strategic development services to businesses of
          any size to assist in entering and navigating the US marketplace. We
          leverage our large network of consultants and partnerships in Seattle
          and Korea to provide a customized experience to suit our clients’
          needs. Click the links below to learn more about our offerings.
        </p>
      </div>

      <div className="col-span-4 grid grid-cols-2 gap-3 ">
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
      </div>

      <div className="col-span-4 flex flex-col bg-white items-center justify-center p-6 mt-3 w-full rounded-2xl shadow-md">
        <p className="">
          Our services are customized to fit the needs of our clients. Please
          get in touch with us so that we may address your specific business
          requirements.
        </p>
        <AnchorLink
          offset="70"
          href="#contact"
          className="outline-none right-1 bg-blue-800 text-white px-4 py-2 rounded-full flex flex-row items-center justify-between text-xs mt-6"
        >
          CONTACT US
          {/* <FiArrowRight className="text-md ml-3" /> */}
        </AnchorLink>
        {/* <button className="outline-none right-1 bg-gray-200 p-3 rounded-md flex flex-row items-center justify-between text-xs mt-6">
          CONTACT US
          <FiArrowRight className="text-md ml-3" />
        </button> */}
      </div>
      <div className="col-span-4 flex flex-col bg-white items-center justify-center p-6 mt-3 w-full rounded-2xl shadow-md">
        <p className="text-lg font-bold">PROJECTS & PARTNERSHIPS</p>
        <p className="mt-3">
          Follow the link to learn more about the partners we work with and
          review some of the projects we’ve completed.
        </p>
        <Link
          to="/partners"
          className="outline-none right-1 bg-blue-800 text-white px-4 py-2 rounded-full flex flex-row items-center justify-between text-xs mt-6"
        >
          VIEW OUR PAST PROJECTS
          {/* <FiArrowRight className="text-md ml-3" /> */}
        </Link>
        {/* <button className="outline-none right-1 bg-white p-3 rounded-md flex flex-row items-center justify-between text-xs mt-6">
          VIEW OUR PAST PROJECTS
          <FiArrowRight className="text-md ml-3" />
        </button> */}
      </div>
      {ModalVisible && (
        <Modal
          visible={ModalVisible}
          onClose={() => onModalClose()}
          closable={true}
          maskClosable={true}
          width={"80%"}
        >
          {value === 1 && (
            <ModalContent
              title="PRODUCT DEVELOPMENT"
              subcontent="We specialize in helping Korean companies develop, market, and launch their products in the United States. Our experts will help you create and sharpen product pitches and presentations, conduct market and user research, establish legal entities, and begin selling directly to American consumers. We also provide assistance with branding, packaging, and localization."
            />
          )}
          {value === 2 && (
            <ModalContent
              image
              title="INVESTMENT PREPARATION & NETWORKING"
              subcontent="We help startups secure funding through our extensive partner network of investors and venture capital firms. We provide the necessary services to establish the proper legal entities in the United States. We also prepare our clients for investor meetings by reviewing and updating presentations to reflect trends and requirements in the U.S. market"
            />
          )}
          {value === 3 && (
            <ModalContent
              title="SHELL COMPANY SETUP"
              subcontent="SeattleBase has extensive experience creating shell companies for large corporations to test products with an American audience. We provide branding, social media management, and talent acquisition of local professionals to make the transition to the U.S. market as seamless as possible. This allows for smaller teams within large companies to act as a true startup, providing valuable experience to those employees."
            />
          )}
          {value === 4 && (
            <ModalContent
              title="PRODUCT DEVELOPMENT"
              subcontent="We provide variety of interactive seminars. We run 2- to 6-week hackathons and onsite incubator programs for new product concepts. We offer a number of workshops to help businesses better understand the American marketplace. We also lead site visits to local Seattle companies, such as Amazon and Microsoft, to meet with executives and help our clients understand how they approach product development and strategy."
            />
          )}
          {value === 5 && (
            <ModalContent
              title="LEGAL BUSINESS ENTITY SETUP"
              subcontent="We provide all the necessary services for creating a legal entity in the United States, which is the first step in bringing international products to market. We guide our clients through the entire process, including structuring the company, working with attorneys, navigating local regulations, and acquiring and hiring talent and partners. We have extensive experience in transporting Korean business opportunities into U.S. business opportunities.
              "
            />
          )}
        </Modal>
      )}
    </div>
  );
};

export default Service;
