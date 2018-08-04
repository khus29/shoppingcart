import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import SectionContainer from '../containers/sections/SectionContainer';
import HomeContainer from '../containers/HomeContainer';
import CartContainer from '../containers/CartContainer';
import ProductDetailsContainer from '../containers/sections/ProductDetailsContainer';

function Routes() {
    return (
      <Router >
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/women" component={SectionContainer} />
            <Route path="/product/:productId" component={ProductDetailsContainer} />
            <Route path="/men" component={SectionContainer} />
            <Route path="/kids" component={SectionContainer} />
            <Route path="/cartDetails" component={CartContainer} /> 
        </Switch>
      </Router >
    );
  }

  export default Routes;