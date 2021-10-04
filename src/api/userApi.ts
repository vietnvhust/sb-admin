import { IUser } from './../stores/auth/types';
import { AxiosResponse } from "axios";
import { axiosClient } from "./axiosClient";

const getAll = async (): Promise<IUser[]> => {
  const response: AxiosResponse<IUser[]> = await axiosClient.post("http://localhost:5000/api/v1/users");
  return response.data
};

export const userApi = {
  getAll,
};