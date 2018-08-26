import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SectionContainer from "../containers/sections/SectionContainer";
import Home from "../components/Home";
import CartContainer from "../containers/CartContainer";
import Login from "../components/Login";
import CreateUser from "../components/CreateUser";
import ProductDetailsContainer from "../containers/sections/ProductDetailsContainer";
import { PrivateRoute } from "./privateroute";
import auth from "./auth";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/women" component={SectionContainer} />
      <Route path="/product/:productId" component={ProductDetailsContainer} />
      <Route path="/men" component={SectionContainer} />
      <Route path="/kids" component={SectionContainer} />
      <Route path="/login" component={Login} />
      <Route path="/createUser" component={CreateUser} />
      <Route path="/checkout" component={CartContainer} />
      <PrivateRoute
        authed={auth.checkAuthenticated()}
        path="/cartDetails"
        component={CartContainer}
      />
    </Switch>
  );
}

export default Routes;
