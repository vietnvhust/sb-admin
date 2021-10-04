import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import "./assets/fontawesome/css/all.min.css"
import "./assets/css/sb-admin-2.min.css"
import { PrivateRouter } from './components';
import { Login } from './pages/admin';
import Register from './pages/admin/Register';
import Admin from './pages/admin/Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRouter>
            <Admin />
          </PrivateRouter>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
