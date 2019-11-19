import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Authorize from './Authorize';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route  path="/" exact component={Authorize} />
        <Route  path="/signin-oidc" exact component={Login} />
        <Route  path="/home" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
