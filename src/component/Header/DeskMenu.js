import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import theme from "../../styles/theme";
import { IoEllipseSharp } from "react-icons/io5";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { useSelector, useDispatch } from "react-redux";
import { changeLang } from "../../redux/langSlice";
import Switch from "../../component/Switch/Switch";
const DeskMenu = ({ setNavbarOpen, navbarOpen }) => {
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
    <ul className="flex  h-full flex-row  items-center p-3 relative">
      <NavLink
        to={"/about"}
        onClick={() => setNavbarOpen(false)}
        className="text-black px-3 py-1  font-thin flex flex-row items-center justify-center"
        activeClassName="font-bold"
      >
        {/* <IoEllipseSharp size={8} /> */}
        <p className="ml-2">ABOUT</p>
      </NavLink>

      <NavLink
        to={"/services"}
        onClick={() => setNavbarOpen(false)}
        className="text-black  px-3 py-1  font-thin flex flex-row items-center justify-center"
        activeClassName="font-bold"
      >
        <p className="ml-2">SERVICES</p>
      </NavLink>

      <NavLink
        onClick={() => setNavbarOpen(false)}
        to={"/partners"}
        className=" text-black  px-3 py-1  font-thin flex flex-row items-center justify-center"
        activeClassName="font-bold"
      >
        <p className="ml-2">PARTNERS</p>
      </NavLink>
      <NavLink
        onClick={() => setNavbarOpen(false)}
        to={"/companies"}
        className=" text-black  px-3 py-1  font-thin flex flex-row items-center justify-center"
        activeClassName="font-bold"
      >
        <p className="ml-2">COMPANIES</p>
      </NavLink>
      <AnchorLink
        onClick={() => setNavbarOpen(false)}
        href="#contact"
        offset="250"
        className=" text-black px-3 py-1  font-thin flex flex-row items-center justify-center"
      >
        <p className="ml-2">CONTACT</p>
      </AnchorLink>
      {/* <Switch desk isOn={checked} handleToggle={() => setChecked(!checked)} /> */}
    </ul>
  );
};

export default DeskMenu;
