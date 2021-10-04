import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import { getCurrentLoginUser } from "../../stores/auth";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./Dashboard";
import { User } from "./User";

function Admin() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentLoginUser());
  }, []);
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div className="container-fluid">
            <Switch>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/users">
                <User />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Admin;
