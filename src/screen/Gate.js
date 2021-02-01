import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import { withTranslation } from "react-i18next";

import Pwrap from "../component/Pwrap";
import SpanWarp from "../component/SpanWrap";
import { ToastContainer } from "react-toastify";
import Header from "../component/Header";
import MoblieMenu from "../component/Header/MobileMenu";
import Home from "../screen/Home/Home";
import Contact from "../component/Footer/Contact";
import Footer from "../component/Footer/Footer";
import About from "./About/About";
import Service from "./Service/Service";
import Project from "./Project/Project";
import Company from "./Company/Company";
import { useMediaQuery } from "react-responsive";
import DeskMenu from "../component/Header/DeskMenu";
import Admin from "./Admin/Admin";
import AuthRoute from "../component/AuthRoute";
import firebase from "firebase";
import Login from "./Auth/Login";
const Gate = props => {
  let location = useLocation();
  const { lang } = useSelector(state => state.langReducer);
  // const { isLoggedIn } = useSelector(state => state.userReducer);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const { t } = props;
  React.useEffect(() => {
    console.log(navbarOpen);
    if (navbarOpen) {
      window.scrollTo(0, 0);
    }
  }, [navbarOpen]);
  const Mobile = useMediaQuery({
    query: "(max-width: 1023px)",
  });
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log("fhrmdls");
    } else {
      // No user is signed in.
      console.log("ㅣㅐ해ㅕㅅ");
    }
  });
  console.log(location.pathname);
  return (
    <div className="relative w-full flex flex-col items-center font-sans bg-gray-100">
      <ToastContainer position="top-center" />
      <Header setNavbarOpen={setNavbarOpen} navbarOpen={navbarOpen} />
      <div
        className={`sticky flex flex-col items-start laptop:hidden bg-gray-100 w-full transition-all
          ${navbarOpen ? "  h-44 opacity-100" : "h-0 opacity-0"}`}
      >
        {Mobile && (
          <MoblieMenu
            isLoggedIn={true}
            navbarOpen={navbarOpen}
            setNavbarOpen={setNavbarOpen}
          />
        )}
      </div>
      <div
        className={`w-full grid grid-cols-4 lg:grid-cols-12  gap-3 lg:gap-12 pb-6 `}
      >
        <section className="col-span-4 lg:col-start-3 lg:col-end-11  flex flex-col items-center ">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Service} />
            <Route exact path="/partners" component={Project} />
            <Route exact path="/companies" component={Company} />
            <Route exact path="/login" component={Login} />
            <AuthRoute
              exact
              path="/admin"
              component={Admin}
              authenticated={isLoggedIn}
            />
          </Switch>
        </section>
        <div className="col-span-4 lg:col-start-3 lg:col-end-11">
          {location.pathname !== "/admin" && location.pathname !== "/login" && (
            <section id="contact">
              <Contact />
            </section>
          )}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Gate);
