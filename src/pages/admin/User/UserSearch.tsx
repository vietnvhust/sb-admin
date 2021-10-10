import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {getUserPaination} from './../../../stores/user'

type UserSearchProps = {
    onHandleSearch: Function
}

export function UserSearch({onHandleSearch}: UserSearchProps) {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target
        setSearch(value)
    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(getUserPaination(1, search))
        onHandleSearch(search)
    }
  return (
    <div className="card mb-4">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" onChange={handleChange} name="search" placeholder="Từ khoá" />
          </div>
          <div className="form-group mb-0">
            <button type="submit" className="btn btn-primary my-1">
              Tìm kiếm
            </button>
            <button type="button" className="btn btn-default my-1">
              Xoá
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}