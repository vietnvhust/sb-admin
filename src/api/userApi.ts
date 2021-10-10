import { IUser } from './../stores/auth';
import { AxiosResponse } from "axios";
import { axiosClient } from "./axiosClient";
import { IPagination } from '../helpers';
import { IAddUserRequest } from '../stores/user';

const getUserPaination = async (currentPage: number, keyword: string): Promise<IPagination<IUser>> => {
  const response: AxiosResponse<IPagination<IUser>> = await axiosClient.get(`/api/v1/users/paging/${currentPage}/?keyword=${keyword}`);
  return response.data
}
const addNewUser = async (user: IAddUserRequest): Promise<any> => {
  const response: AxiosResponse<any> = await axiosClient.post('/api/v1/users', user);
  return response.data
}
export const userApi = {
  getUserPaination,
  addNewUser
};