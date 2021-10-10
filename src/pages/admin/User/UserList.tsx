import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calculatePagination, IPraramsPagination } from "../../../helpers";
import { IUser } from "../../../stores/auth";
import { AppState } from "../../../stores/stores";
import { IUserState } from "../../../stores/user";
import { Pagination } from "../components/Pagination";
import Showing from "../components/Showing";
import { UserItem } from "./UserItem";
import { UserSearch } from "./UserSearch";

export function UserList() {
  const userState: IUserState = useSelector((state: AppState) => state.user);
  const [keyword, setKeyword] = useState("");
  const { total, page } = userState;
  const paramsPagination: IPraramsPagination = calculatePagination(page, total);
  const { to, show, pageMax } = paramsPagination;
  const onHandleSearch = (search: string) => {
    setKeyword(search);
  };
  return (
    <>
      <div className="row">
        <div className="col-6">
          <h1 className="h3 mb-2 text-gray-800">Tables</h1>
          <p className="mb-4">
            Cupidatat in tempor laboris ullamco voluptate et sit exercitation.
            Sint aliquip fugiat commodo excepteur incididunt irure sunt. Esse
            aute occaecat esse in nulla.
          </p>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-end">
            <Link to="/users/add" className="btn btn-primary btn-icon-split p-2">
              <span className="mr-2">Add User</span>{" "}
              <i style={{ lineHeight: "unset" }} className="fas fa-plus"></i>{" "}
            </Link>
          </div>
        </div>
      </div>

      <UserSearch onHandleSearch={onHandleSearch} />

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%">
              <thead>
                <tr>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Email</th>
                  <th>Avatar</th>
                  <th className="text-center" style={{ width: "200px" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Email</th>
                  <th>Avatar</th>
                  <th className="text-center" style={{ width: "200px" }}>
                    Action
                  </th>
                </tr>
              </tfoot>
              <tbody>
                {!!userState?.users &&
                  userState.users.map((user: IUser) => {
                    return <UserItem key={user._id} user={user} />;
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <Showing to={to} show={show} total={total} />
        <Pagination keyword={keyword} pageMax={pageMax} />
      </div>
    </>
  );
}
