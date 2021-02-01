import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import { useMediaQuery } from "react-responsive";
import { AiOutlineDownSquare, AiOutlineUpSquare } from "react-icons/ai";

import { useSelector } from "react-redux";
import SpanWrap from "./SpanWrap";
import theme from "../styles/theme";
import logo from "../assets/logo.png";
import DeskMenu from "../component/Header/DeskMenu";

const Header = ({ navbarOpen, setNavbarOpen }) => {
  const LapTop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  const Mobile = useMediaQuery({
    query: "(max-width: 1023px)",
  });

  React.useEffect(() => {}, []);

  return (
    <div className="sticky w-full z-10 bg-white shadow-sm top-0 m-auto">
      <header className="  m-auto ">
        <nav
          style={{ height: Mobile ? 50 : 60 }}
          className="col-span-4 lg:col-start-3 lg:col-end-11 px-3 lg:px-12 w-full flex flex-row items-center justify-between"
        >
          <Link
            to="/"
            onClick={() => setNavbarOpen(false)}
            className="flex flex-row cursor-pointer"
          >
            <img
              alt="mobilelogo"
              src={logo}
              className="cursor-pointer"
              style={{ width: 120, objectFit: "contain" }}
            />
          </Link>
          {Mobile ? (
            <Hamburger
              toggled={navbarOpen}
              toggle={setNavbarOpen}
              size={24}
              color={theme.GRAY_08}
            />
          ) : (
            <DeskMenu setNavbarOpen={setNavbarOpen} navbarOpen={navbarOpen} />
          )}
          {/* mobile menu */}
          {/* <button
            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block laptop:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <AiOutlineUpSquare size={32} color={theme.PRIMARY_04} />
            ) : (
              <AiOutlineDownSquare size={32} color={theme.PRIMARY_04} />
            )}
          </button> */}
          {/* <Tablet isLoggedIn={isLoggedIn} /> */}
        </nav>
      </header>
    </div>
  );
};

export default Header;
