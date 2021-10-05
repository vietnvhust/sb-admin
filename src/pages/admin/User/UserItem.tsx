import React from "react";
import { IUser } from "../../../stores/auth";
export type UserProp = {
  user: IUser;
};
export const UserItem = ({ user }: UserProp): JSX.Element => {
  const { first_name, last_name, email, avatar } = user;
  return (
    <tr>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{email}</td>
      <td>
        <img style={{ width: "50px" }} src={avatar} alt={first_name} />
      </td>
      <td>
        <div className="d-flex justify-content-center">
        <button
            style={{ border: "none" }}
            className="btn btn-info btn-circle mr-2"
          >
            <i className="fas fa-eye"></i>
          </button>
          <button
            style={{ border: "none" }}
            className="btn btn-success btn-circle mr-2"
          >
            <i className="fas fa-edit"></i>
          </button>
          <button
            style={{ border: "none" }}
            className="btn btn-danger btn-circle"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};
