import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full mt-3 p-6 flex flex-col items-start">
      {/* <p className="font-bold">FIND US AT</p> */}
      <Link to="/admin" className="px-3 bg-gray-200 mt-3 rounded-xl">
        <span>ADMIN</span>
      </Link>
      <p className="mt-3">Seattle Basecamp inc.</p>
      <p>2205 152nd Ave NE Redmond, WA 98052</p>
      <p>team@seattlebase.com</p>
      <p className="text-gray-500 ">
        ©{`${new Date().getFullYear()} by Seattle Basecamp Inc.`}
      </p>
    </div>
  );
};

export default Footer;
