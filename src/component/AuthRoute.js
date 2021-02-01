import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ authenticated, children, ...rest }) => {
  // console.log("라우터", authenticated);
  return (
    <>
      {authenticated ? (
        <Route {...rest}></Route>
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )}
    </>
  );
};

export default AuthRoute;
