import React from "react";
import { UserItem } from "./UserItem";

export function UserList() {
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
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </tfoot>
              <tbody>
                <UserItem />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
