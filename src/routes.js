import React from 'react';
import { Route, Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import HomePage from './containers/home/HomePage';

const history = createHistory();

const Routes = () => {
    return (
      <Router history={ history }>
        <Route exact path='/' component={ HomePage }/>
      </Router>
    );
}

export default Routes;
