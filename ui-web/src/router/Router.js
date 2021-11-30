import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Comunity from '../Pages/Comunity';
import Dashboard from '../Pages/Dashboard';
import Indicators from '../Pages/Indicators';

class Router extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/indicators" component={Indicators} />
            <Route exact path="/join" component={Comunity} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Router;
