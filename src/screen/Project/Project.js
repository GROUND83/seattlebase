import React, { Component } from "react";
import AspectRatio from "react-aspect-ratio";
import theme from "../../styles/theme";
import { useTranslation } from "react-i18next";
import { FiArrowRight } from "react-icons/fi";
import YouTube from "react-youtube";
import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai";
import ProjectModal from "../../component/ProjectModal";
const Project = () => {
  const { t, i18n } = useTranslation();
  const [ModalVisible, setModalVisible] = React.useState(false);
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    <div className="flex flex-col">
      <div className="flex flex-col bg-gray-100 items-center justify-center p-6 ">
        <p className="text-lg font-bold">OUR PARTNERS & PROJECTS</p>
        <p className="text-sm mt-3">
          Our connections and partnerships allow us to provide our clients with
          a range of services to fit any business need.
        </p>
        <p className="text-sm mt-3">
          SeattleBase has a longstanding relationship with{" "}
          <a
            href="https://www.kosmes.or.kr/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 cursor-pointer underline"
          >
            KOSME
          </a>
          , the Korean government’s startup center. As a valued partner, we are
          often tasked with helping startups build a presence in the U.S.
          market.
        </p>
        <p className="text-sm mt-3">
          Our staff and our team of expert consultants represent a wide variety
          of major companies and up-and-coming startups from the Seattle Area.
          We partner closely with the highly influential{" "}
          <a
            href="https://www.kosmes.or.kr/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 cursor-pointer underline"
          >
            WTIA
          </a>
          , the Washington Technology Industry Association, to connect with the
          top talent in the tech industry. Our partnerships extend beyond just
          technology companies to retail and marketing as well.
        </p>
        <p className="text-sm mt-3">Here are some of our past projects.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 p-6">
        <div
          className="flex flex-col bg-white items-start justify-start rounded-2xl shadow-md relative px-3 py-12"
          style={{ height: 250 }}
        >
          <div onClick={() => onModalClick(1)}>
            <AiOutlinePlusCircle className="text-2xl  absolute top-3 right-3  text-gray-400" />
          </div>
          <span className="text-lg font-bold text-left">
            LG GLOBAL X PROGRAM
          </span>
          <p className="text-gray-400">September 2019</p>
        </div>
        <div
          className="flex flex-col bg-white items-start justify-start rounded-xl shadow-md relative px-3 py-12"
          style={{ height: 250 }}
        >
          <div onClick={() => onModalClick(2)}>
            <AiOutlinePlusCircle className="text-2xl  absolute top-3 right-3  text-gray-400 " />
          </div>
          <span className="text-lg font-bold text-left">
            KOREN STARTUP CENTER 4-WEEK ACCELERATOR PROGRAM
          </span>
          <p className="text-gray-400">January 2020</p>
        </div>
        <div
          className="flex flex-col  bg-white items-start justify-start  rounded-xl shadow-md relative px-3 py-12"
          style={{ height: 250 }}
        >
          <div onClick={() => onModalClick(3)}>
            <AiOutlinePlusCircle className="text-2xl  absolute top-3 right-3 text-gray-400" />
          </div>
          <span className="text-lg font-bold  text-left">
            KOREN STARTUP CENTER 6-WEEK ACCELERATOR PROGRAM (VIRTUAL)
          </span>
          <p className="text-gray-400">September 2020</p>
        </div>
        <div
          className="flex flex-col  bg-white items-start justify-start rounded-xl shadow-md relative px-3 py-12"
          style={{ height: 250 }}
        >
          <div onClick={() => onModalClick(4)}>
            <AiOutlinePlusCircle className="text-2xl  absolute top-3 right-3  text-gray-400" />
          </div>
          <p className="text-lg font-bold text-left">
            LG 4-WEEK MBA GLOBAL HACKATHON
          </p>
          <p className="text-gray-400">October 2020</p>
        </div>
      </div>
      {ModalVisible && (
        <ProjectModal
          visible={ModalVisible}
          onClose={() => onModalClose()}
          closable={true}
          maskClosable={true}
          width={"93%"}
        >
          {value === 1 && (
            <div className="flex flex-col items-center ">
              <div onClick={() => onModalClose()}>
                <AiOutlineCloseCircle className="text-2xl  absolute top-3 right-3  text-black" />
              </div>
              <div
                alt="lg global x program"
                style={{
                  width: "100%",
                  height: 200,
                  backgroundColor: theme.GRAY_04,
                }}
              />

              <div className="p-6">
                <span className="font-bold">LG GLOBAL X PROGRAM</span>
                <p className={"mt-2"}>
                  Finalists from LG’s internal hackathon were brought to Seattle
                  to participate in 2-week incubation program, undertaking
                  market validation for their product. For this program, we
                  created shell companies for each group, booked them local
                  office space, and aided them in conducting market surveys,
                  customer interviews, competitor research, street demo and
                  networking events, and hiring temporary local talent to assist
                  them. We also conducted tours of Seattle tech companies,
                  luncheons with employees, and company strategy seminars with
                  corporate partners. The program culminated in a demonstration
                  and presentation day.
                </p>
                <p className="mt-1">
                  The final products can be seen here: DoggoMaster and
                  MyBabyDaily
                </p>
                <div className="mt-3">
                  <YouTube
                    videoId="TZob7l4zvHk"
                    opts={{
                      width: "100%",
                      height: 240,
                      playerVars: { autoplay: 0 },
                    }}
                  />
                </div>
                <div className="mt-3">
                  <YouTube
                    videoId="-h3thQ4TYn4"
                    opts={{
                      width: "100%",
                      height: 240,
                      playerVars: { autoplay: 0 },
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          {value === 2 && (
            <div className="flex flex-col items-center ">
              <div onClick={() => onModalClose()}>
                <AiOutlineCloseCircle className="text-2xl  absolute top-3 right-3  text-black" />
              </div>
              <div
                alt="lg global x program"
                style={{
                  width: "100%",
                  height: 200,
                  backgroundColor: theme.GRAY_04,
                }}
              />

              <div className="p-6">
                <span className="font-bold">
                  KOREN STARTUP CENTER 4-WEEK ACCELERATOR PROGRAM
                </span>
                <p className={"mt-2"}>
                  The Korean Startup Center is a non-profit branch of the Korean
                  government that operates worldwide. They partnered with
                  SeattleBase to run an incubator program for 7 startups at
                  various stages of growth. The companies were divided into 2
                  groups: one to focus on product development and one to secure
                  funding from US investors. The teams spent 4 weeks in Seattle
                  and were paired with experts to help them hone and improve
                  their ideas and present them to investors. We guided each team
                  through the process of establishing themselves as legal U.S.
                  entities, building and practicing pitch decks, and hire local
                  partners.
                </p>
                <p className="mt-1">
                  Omorobot: an automated robotic cart for warehouse use
                </p>
                <ul className="px-6">
                  <li className="list-disc">
                    market validation through different prospects meetings in
                    several segments
                  </li>
                  <li className="list-disc">
                    meeting with Amazon Warehouse and Garden Center Canada, UPS
                  </li>
                </ul>
                <p className="mt-1">
                  Pnafore: a baking supply company and online marketplace
                </p>
                <ul className="px-6">
                  <li className="list-disc">
                    Set up onsite meeting with investor for in-depth review
                  </li>
                  <li className="list-disc">
                    Reach out to Prospect new investors in Seattle and Silicon
                    valley
                  </li>
                  <li className="list-disc">
                    Apply startup programs including Y Combinator, Snapchat lab,
                    New Chip program.
                  </li>
                </ul>
                <p className="mt-1">
                  Omorobot: an automated robotic cart for warehouse use
                </p>
                <ul className="px-6">
                  <li className="list-disc">
                    market validation through different prospects meetings in
                    several segments
                  </li>
                  <li className="list-disc">
                    meeting with Amazon Warehouse and Garden Center Canada, UPS
                  </li>
                </ul>
                <p className="mt-1">
                  H-Robotics: a company that develops tele-rehab robotic
                  healthcare products
                </p>
                <ul className="px-6">
                  <li className="list-disc">
                    Consult with Rehab medicine experts from UW Medicine and
                    Johns Hopkins
                  </li>
                  <li className="list-disc">
                    Connect with local distributors including local medical
                    device stores
                  </li>
                  <li className="list-disc">
                    Consult formation of Regioanl Office and hire head of US
                    marketing.
                  </li>
                </ul>
              </div>
            </div>
          )}
          {value === 3 && (
            <div className="flex flex-col items-center ">
              <div onClick={() => onModalClose()}>
                <AiOutlineCloseCircle className="text-2xl  absolute top-3 right-3  text-black" />
              </div>
              <div
                alt="lg global x program"
                style={{
                  width: "100%",
                  height: 200,
                  backgroundColor: theme.GRAY_04,
                }}
              />

              <div className="p-6">
                <span className="font-bold">
                  KOREN STARTUP CENTER 6-WEEK ACCELERATOR PROGRAM (VIRTUAL)
                </span>
                <p className={"mt-2"}>
                  This event followed the same format as the January program,
                  but was entirely virtual due to the COVID-19 pandemic.
                  SeattleBase chose 11 startups to put through our program.
                  Information on the entire event can be found at this link.
                </p>
                <p className="mt-1">
                  Morai: True-tolife Autonomous vechicle driving simulator
                </p>
                <ul className="px-6">
                  <li className="list-disc">Accepted Nvidia Startup program</li>
                  <li className="list-disc">
                    In talk with Waymo, Lyft, and University of Washington for
                    partership
                  </li>
                  <li className="list-disc">
                    Meeting with Beoing, Mitsubishi, Washington State
                    University, Washington State Autonomous Work Group
                  </li>
                </ul>
                <p className="mt-1">
                  GoodByeCar: Electic vechicle Battery upcycling business
                </p>
                <ul className="px-6">
                  <li className="list-disc">Set up a USA company</li>
                  <li className="list-disc">
                    Ran a Kickstarter campagin succeffuly
                  </li>
                  <li className="list-disc">
                    In talk with Militarries Batteries for partnership
                  </li>
                </ul>
              </div>
            </div>
          )}
          {value === 4 && (
            <div className="flex flex-col items-center ">
              <div onClick={() => onModalClose()}>
                <AiOutlineCloseCircle className="text-2xl  absolute top-3 right-3  text-black" />
              </div>
              <div
                alt="lg global x program"
                style={{
                  width: "100%",
                  height: 200,
                  backgroundColor: theme.GRAY_04,
                }}
              />

              <div className="p-6">
                <span className="font-bold">
                  LG 4-WEEK MBA GLOBAL HACKATHON
                </span>
                <p className={"mt-2"}>
                  This event was online-only due to the ongoing pandemic.
                  SeattleBase organized and ran a virtual hackathon for 18 teams
                  of 120 LG employees. We led daily seminars with the
                  participants and paired each team with a series of experts in
                  fields like product development, user experience design, and
                  market research. The teams were taught user-centered design
                  principles and UX research methods to better understand
                  product design from the perspective of the customer.
                </p>
                <p className="mt-1">
                  The link to the final deliverables can be found here.
                </p>
              </div>
            </div>
          )}
        </ProjectModal>
      )}
    </div>
  );
};

export default Project;
