import { IToken, IUser } from './../stores/auth/types';
import { AxiosResponse } from "axios";
import { axiosClient } from "./axiosClient";

const login = async (email: string, password: string): Promise<IToken> => {
  const body = { email, password };
  const response: AxiosResponse<IToken> = await axiosClient.post("/api/v1/auth", body);
  return {
    token: response.data.token
  }
};
const getCurrentLoginUser = async (): Promise<IUser> => {
  const response: AxiosResponse<IUser> = await axiosClient.get("/api/v1/auth")
  return response.data
}
export const authApi = {
  login,
  getCurrentLoginUser
};