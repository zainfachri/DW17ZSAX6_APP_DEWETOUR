import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateUser = ({ component: Component, ...rest }) => {
  const token = localStorage.token;
  const userId = localStorage.userId;
  return (
    <Route
      {...rest}
      render={(props) =>
        userId == 2 && token ? (
          <Component {...props} />
        ) : !token ? (
          <Redirect to="/" />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateUser;
