import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import theme from "../../styles/theme";
import { IoEllipseSharp } from "react-icons/io5";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { useSelector, useDispatch } from "react-redux";
import { changeLang } from "../../redux/langSlice";
import Switch from "../../component/Switch/Switch";
const MoblieMenu = ({ setNavbarOpen, navbarOpen }) => {
  const dispatch = useDispatch();
  const { lang } = useSelector(state => state.langReducer);
  const [checked, setChecked] = React.useState(false);

  const setLanguage = value => {
    dispatch(changeLang(value));
  };
  React.useEffect(() => {
    if (checked) {
      dispatch(changeLang("en"));
    } else {
      dispatch(changeLang("ko"));
    }
  }, [checked, dispatch]);
  return (
    <ul
      className={`${
        navbarOpen ? "flex" : "hidden"
      } w-full h-full flex-col  items-start p-3 relative bg-blue-800`}
    >
      {/* <Switch isOn={checked} handleToggle={() => setChecked(!checked)} /> */}

      <NavLink
        to={"/about"}
        onClick={() => setNavbarOpen(false)}
        className="text-white px-3 py-1  font-thin flex flex-row items-center justify-center"
        activeClassName="font-bold"
      >
        {/* <IoEllipseSharp size={8} /> */}
        <p className="ml-2 ">ABOUT</p>
      </NavLink>

      <NavLink
        to={"/services"}
        onClick={() => setNavbarOpen(false)}
        className="text-white  px-3 py-1  font-thin flex flex-row items-center justify-center"
        activeClassName="font-bold"
      >
        <p className="ml-2">SERVICES</p>
      </NavLink>

      <NavLink
        onClick={() => setNavbarOpen(false)}
        to={"/partners"}
        className=" text-white  px-3 py-1  font-thin flex flex-row items-center justify-center"
        activeClassName="font-bold"
      >
        <p className="ml-2">PARTNERS</p>
      </NavLink>
      <NavLink
        onClick={() => setNavbarOpen(false)}
        to={"/companies"}
        className=" text-white  px-3 py-1  font-thin flex flex-row items-center justify-center"
        activeClassName="font-bold"
      >
        <p className="ml-2">COMPANIES</p>
      </NavLink>
      <AnchorLink
        onClick={() => setNavbarOpen(false)}
        href="#contact"
        offset="250"
        className=" text-white px-3 py-1  font-thin flex flex-row items-center justify-center"
      >
        <p className="ml-2">CONTACT</p>
      </AnchorLink>
    </ul>
  );
};

export default MoblieMenu;
