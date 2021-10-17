import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { IAlertState } from "../../stores/alert";
import { getCurrentLoginUser } from "../../stores/auth";
import { AppState } from "../../stores/stores";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./Dashboard";
import { User } from "./User";
import UserAdd from "./User/UserAdd";

function Admin() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentLoginUser());
  }, []);
  const alertState: IAlertState = useSelector((state: AppState) => state.alert);
  const { type, message } = alertState;
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div className="container-fluid">
            {type && message && (
              <div className={`alert ${type}`} role="alert">
                {message}
              </div>
            )}
            <Switch>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/users">
                <User />
              </Route>
              <Route exact path="/users/add">
                <UserAdd />
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
