import React from "react";
import { useSelector } from "react-redux";
import { IUser } from "../../../stores/auth";
import { AppState } from "../../../stores/stores";
import { IUserState } from "../../../stores/user";
import { UserItem } from "./UserItem";

export function UserList() {
  const userState: IUserState = useSelector((state: AppState) => state.user);
  return (
    <>
      <h1 className="h3 mb-2 text-gray-800">Tables</h1>
      <p className="mb-4">
        Cupidatat in tempor laboris ullamco voluptate et sit exercitation. Sint
        aliquip fugiat commodo excepteur incididunt irure sunt. Esse aute
        occaecat esse in nulla.
      </p>
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
                  <th className="text-center" style={{"width": "200px"}}>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Email</th>
                  <th>Avatar</th>
                  <th className="text-center" style={{"width": "200px"}}>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {
                  !!userState?.users && (
                    userState.users.map((user: IUser) => {
                      return (
                        <UserItem key={user._id} user={user} />
                      )
                    })
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
