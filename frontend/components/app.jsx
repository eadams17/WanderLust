import React from 'react';
import { HashRoute, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import PhotoIndexContainer from './photos/photo_index_container';

const App = () => (
  <div className="app">
    <NavbarContainer/>
    <Route path="/photos" component={ PhotoIndexContainer }/>
    <AuthRoute path="/login" component={ SessionFormContainer }/>
    <AuthRoute path="/register" component={ SessionFormContainer }/>
  </div>
);

export default App;
