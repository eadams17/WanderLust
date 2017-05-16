import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div>
    <header>
      <h1>WanderLust</h1>
    </header>

    <Route path="/login" component={ SessionFormContainer }/>
    <Route path="/register" component={ SessionFormContainer }/>
  </div>
);

export default App;
