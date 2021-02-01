import React, { Component } from "react";
import AspectRatio from "react-aspect-ratio";
import theme from "../../styles/theme";
import { useTranslation } from "react-i18next";
import { FiArrowRight } from "react-icons/fi";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
const About = () => {
  const { t, i18n } = useTranslation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const RenderContent = ({ image, title, contents, name }) => {
    return (
      <div className="col-span-4 lg:col-span-2  flex flex-col lg:flex-row bg-white items-start justify-center  rounded-3xl overflow-hidden  shadow-md">
        {image !== null ? (
          <img
            alt="profile"
            src={image}
            className="w-full lg:w-1/2 object-cover"
            style={{ height: 320 }}
          />
        ) : (
          <div
            className="w-full bg-gray-400"
            style={{ height: 320, width: 300 }}
          />
        )}
        <div className="w-full lg:w-1/2 px-6 py-4 flex flex-col items-start justify-start ">
          <span className="font-bold text-blue-800 tracking-widest">
            {title}
          </span>
          <p className="text-sm text-left font-serif mt-3 text-gray-600">
            <strong>{name}</strong> {contents}
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="grid grid-cols-4 gap-3 lg:gap-12 m-3 ">
      <div className="col-span-4 flex flex-col  items-center justify-center p-6 ">
        <p className="text-lg font-bold text-blue-800">OUR STORY</p>
        <p className="text-sm mt-3">
          SeattleBase was founded by Korean tech industry and startup veterans
          living in the United States, an experienced group of industry
          professionals with decades of expertise in business development,
          investment, data science, market research, engineering, and
          entrepreneurship. We are passionate about leveraging our deep
          connections to both cultures to build stronger bonds between the two
          countries we have called home.
        </p>
      </div>

      <div className="col-span-4  grid grid-cols-4 gap-3  lg:gap-6 items-center justify-center mt-2 w-full">
        <div className="col-span-4 flex flex-col items-center">
          <p className="text-lg font-bold text-blue-800">OUR TEAM</p>
        </div>
        <RenderContent
          image={profile1}
          title="MANAGING DIRECTOR"
          name="Alex Choe"
          contents="has been a successful entrepreneur in
              technology for the past 20 years. During that time, he started and
              was involved in four different startups including an IPO in KOSDAQ
              and a M&A. He has extensive strategy and management experience in
              building a valuable business from startup to liquidity. Prior to
              the startups, Alex worked for Microsoft and HP."
        />
        <RenderContent
          image={profile2}
          title="MANAGING DIRECTOR"
          name="Jaehee Song"
          contents="has been a data scientist and engineer
          for over 20 years. He has lectured at several tech companies,
          including Amazon and Samsung. He is the director of the Korean
          Artificial Intelligence Institute. He specializes in technological
          exchanges between the U.S. and Korea. He is actively consulting
          Korean startups for U.S. market expansion and writing/publishing
          startup related articles on blogs and magazine."
        />
        <RenderContent
          image={null}
          title="MANAGING DIRECTOR"
          name="David Oh"
          contents="is an innovative professional with 15+
          years of experience in product management and business development,
          primarily in the telecom/ IoT industry. He has helped create several
          startups including WiderThan which IPO'd in NASDAQ, and now works
          for T-Mobile for 5G/ IOT. He is an expert in both Korean and
          American corporate infrastructure/ growth strategy, and brings that
          expertise to SeattleBase"
        />
        <RenderContent
          image={null}
          title="MANAGING DIRECTOR"
          name="Allon Kim"
          contents="is a software engineer and product
          developer with a proven track record of delivering results. A former
          developer at Amazon, he also created and ran his own startup for
          several years. He specializes in helping clients develop viable MVP
          plans and serving as a technical consultant."
        />
        <RenderContent
          image={null}
          title="CONSULTANT"
          name="Heather Zweig"
          contents="is a product manager at Pluto VR,
          where she focuses on product vision and helping people better
          understand one another. She also has extensive experience organizing
          and running hackathons and conferences in Seattle. She has lived in
          several countries, and brings an international perspective to her
          work."
        />
      </div>
    </div>
  );
};

export default About;
