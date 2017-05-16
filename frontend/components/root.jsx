import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <div>
        <Route path="/" component={ App }/>
          <AuthRoute path="/login" component={ SessionFormContainer }/>
          <AuthRoute path="/register" component={ SessionFormContainer }/>
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
