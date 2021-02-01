import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import { FaRegUserCircle, FaLinkedin, FaRegFileAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdSubject } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
const Contact = () => {
  const { t, i18n } = useTranslation();
  const [tap, setTap] = React.useState("contact");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [linkedin, setLinkedin] = React.useState("");
  const [resume, setResume] = React.useState("");
  const InputStyle =
    "bg-gray-200 px-6 lg:px-6 py-1 text-blue-900 placeholder-gray-400  rounded-md w-full text-md lg:text-lg outline-none  border-none ring-1 ring-gray-300 mt-3 focus:bg-white";
  const LabelStyle = "ml-3 text-blue-900 tracking-widest";
  const clickTap = value => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setLinkedin("");
    setResume("");
    setTap(value);
  };
  return (
    <div className="grid grid-cols-4 gap-3 lg:gap-6  mx-3 rounded-2xl shadow-md overflow-hidden  flex-col items-center bg-white">
      <div className="col-span-4 flex flex-row items-center justify-center mt-3">
        <div
          onClick={() => clickTap("contact")}
          className={`col-span-3 flex flex-col items-center justify-center py-2 mx-3  cursor-pointer ${
            tap === "contact"
              ? "border-b-4 border-blue-900"
              : "border-b-0 border-blue-900"
          } px-3 `}
        >
          <p
            className={`font-bold ${
              tap === "contact" ? "text-blue-900" : "text-gray-300"
            }  text-md lg:text-2xl tracking-widest`}
          >
            CONTACT
          </p>
        </div>
        <div
          onClick={() => clickTap("joinus")}
          className={`col-span-3 flex flex-col items-center justify-center py-2 mx-3  cursor-pointer ${
            tap === "joinus"
              ? "border-b-4 border-blue-900"
              : "border-b-0 border-blue-900"
          } px-3 `}
        >
          <p
            className={`font-bold ${
              tap === "joinus" ? "text-blue-900" : "text-gray-300"
            }  text-md lg:text-2xl tracking-widest`}
          >
            JOIN US
          </p>
        </div>
      </div>
      <div className="col-start-1 col-end-5 lg:col-start-2 lg:col-end-4 p-3">
        {tap === "contact" ? (
          <div className="mt-3  grid grid-cols-4 gap-3">
            {/*  */}

            {/* name */}

            <div className="col-span-2">
              <label className="flex flex-row items-center">
                <FaRegUserCircle className="text-blue-900" />
                <span className={LabelStyle}>NAME</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter your name"
                className={InputStyle}
              />
            </div>
            {/* email */}
            <div className="col-span-2">
              <label className="flex flex-row items-center">
                <FiMail className="text-blue-900" />
                <span className={LabelStyle}>EMAIL</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={InputStyle}
              />
            </div>

            <div className="col-span-4  flex flex-col items-start mt-3">
              <label className="flex flex-row items-center">
                <MdSubject className="text-blue-900" />
                <span className={LabelStyle}>SUBJECT</span>
              </label>
              <input
                type="text"
                value={subject}
                onChange={e => setSubject(e.target.value)}
                placeholder="Enter subject"
                className={InputStyle}
              />
            </div>

            <div className="col-span-4 flex flex-col items-start mt-3">
              <label className="flex flex-row items-center">
                <BiMessageSquareDetail className="text-blue-900" />
                <span className={LabelStyle}>MESSAGE</span>
              </label>
              <textarea
                type="text"
                value={message}
                rows="5"
                cols="33"
                onChange={e => setMessage(e.target.value)}
                placeholder="Enter your message here"
                className={`${InputStyle} whitespace-pre resize-none`}
                style={{ height: 200 }}
              />
            </div>

            <div className="col-span-2 mt-6 bg-gray-300 flex flex-col items-center justify-center py-3 rounded-full px-12 mb-6 cursor-pointer  transform hover:bg-blue-900  hover:shadow-md text-gray-500 hover:text-white">
              <p className="font-bold   font-sans tracking-widest">SUMMIT</p>
            </div>
          </div>
        ) : (
          <div className="mt-3 w-full grid grid-cols-4 gap-3">
            <div className="col-span-4 flex flex-col  items-center justify-center ">
              <p className="">
                We are seeking talented people to join us on our projects. We
                hire project-specific expert roles, and are always looking to
                build relationships. If you’re interested in working with us,
                please fill out our contact form below.
              </p>
              <p className="">
                Seattle Basecamp is looking for a seasoned business development
                manager who will be responsible for bringing profitable sales
                leads to a startup company. This position will create and build
                client relationships across the industry. This will
                predominantly be a prospecting and business development role
                working for our clients.
              </p>
            </div>
            <div className="col-span-4 lg:col-span-2">
              <label className="flex flex-row items-center">
                <FaRegUserCircle className="text-blue-900" />
                <span className={LabelStyle}>NAME</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter your name"
                className={InputStyle}
              />
            </div>
            <div className="col-span-4 lg:col-span-2">
              <label className="flex flex-row items-center">
                <FiMail className="text-blue-900" />
                <span className={LabelStyle}>EMAIL</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={InputStyle}
              />
            </div>
            <div className="col-span-4 lg:col-span-2">
              <label className="flex flex-row items-center">
                <FaLinkedin className="text-blue-900" />
                <span className={LabelStyle}>LINKEDIN</span>
              </label>
              <input
                type="text"
                value={linkedin}
                onChange={e => setLinkedin(e.target.value)}
                placeholder="Enter linkedin"
                className={InputStyle}
              />
            </div>
            <div className="col-span-4 lg:col-span-2">
              <label className="flex flex-row items-center">
                <FaRegFileAlt className="text-blue-900" />
                <span className={LabelStyle}>RESUME</span>
              </label>
              <input
                type="text"
                value={resume}
                onChange={e => setResume(e.target.value)}
                placeholder="Attached resume"
                className={InputStyle}
              />
            </div>
            <div className="col-span-4">
              <label className="flex flex-row items-center">
                <MdSubject className="text-blue-900" />{" "}
                <span className={LabelStyle}>SUBJECT</span>
              </label>
              <input
                type="text"
                value={subject}
                onChange={e => setSubject(e.target.value)}
                placeholder="Enter subject"
                className={InputStyle}
              />
            </div>

            <div className="col-span-4 flex flex-col items-start mt-3">
              <label className="flex flex-row items-center">
                <BiMessageSquareDetail className="text-blue-900" />
                <span className={LabelStyle}>MESSAGE</span>
              </label>
              <textarea
                type="text"
                value={message}
                rows="5"
                cols="33"
                onChange={e => setMessage(e.target.value)}
                placeholder="Enter your message here"
                className={`${InputStyle} whitespace-pre resize-none`}
                style={{ height: 200 }}
              />
            </div>

            <div className="col-span-2 mt-6 bg-gray-300 flex flex-col items-center justify-center py-3 rounded-full px-12 mb-6 cursor-pointer  transform hover:bg-blue-900  hover:shadow-md text-gray-500 hover:text-white">
              <p className="font-bold   font-sans tracking-widest">SUMMIT</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
