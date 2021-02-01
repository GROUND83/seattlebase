import React, { Component } from "react";

import theme from "../../styles/theme";
import { useTranslation } from "react-i18next";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import firebase from "firebase";

const Login = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const clickSum = () => {
    // firebase create user
    console.log("로그인");
  };
  return (
    <div className="w-full p-3 ">
      {/* 1 */}

      <div className="mt-3 w-full flex flex-col items-center justify-between p-6 bg-white rounded-xl">
        <span className="text-md lg:text-2xl font-bold text-blue-800">
          ADMIN
        </span>
        <div className="w-full lg:w-1/3 mt-3">
          <div className="flex flex-col items-start  w-full">
            <label>
              <span>EMAIL</span>
            </label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="px-3 bg-gray-200 py-1 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col items-start mt-3">
            <label>
              <span>password</span>
            </label>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="px-3 bg-gray-200 py-1 rounded-md  w-full"
            />
          </div>
          <button
            className="bg-blue-800 px-3 py-1 rounded-md mt-3"
            onClick={() => clickSum()}
          >
            <p className="text-xl text-white">SUMMIT</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
