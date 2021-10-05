import { IUser } from './../stores/auth';
import { AxiosResponse } from "axios";
import { axiosClient } from "./axiosClient";
import { IPagination } from '../helpers';

const getAll = async (): Promise<IUser[]> => {
  const response: AxiosResponse<IUser[]> = await axiosClient.get("/api/v1/users");
  return response.data
};
const getUserPaination = async (currentPage: number): Promise<IPagination<IUser>> => {
  const response: AxiosResponse<IPagination<IUser>> = await axiosClient.get(`/api/v1/users/paging/${currentPage}`);
  return response.data
}
export const userApi = {
  getAll,
  getUserPaination
};