import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "b108fd33-d977-4add-bda9-9da2037bdf7a",
  },
});
export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((resp: AxiosResponse) => resp.data);
  },
  userAuth() {
    return instance.get(`auth/me`).then((resp: AxiosResponse) => resp.data);
  },
  getProfile(userId: string) {
    return instance
      .get(`profile/` + userId)
      .then((resp: AxiosResponse) => resp.data);
  },
  setFollow(id: number) {
    return instance
      .post(`follow/${id}`)
      .then((resp: AxiosResponse) => resp.data);
  },
  setUnfollow(id: number) {
    return instance
      .delete(`follow/${id}`)
      .then((resp: AxiosResponse) => resp.data);
  },
};
export const authAPI = {
  userAuth() {
    return instance.get(`auth/me`).then((resp: AxiosResponse) => resp.data);
  },
};
export const profileAPI = {
  getProfile(userId: string) {
    return instance
      .get(`profile/` + userId)
      .then((resp: AxiosResponse) => resp.data);
  },
};
export const followAPI = {
  setFollow(id: number) {
    return instance
      .post(`follow/${id}`)
      .then((resp: AxiosResponse) => resp.data);
  },
  setUnfollow(id: number) {
    return instance
      .delete(`follow/${id}`)
      .then((resp: AxiosResponse) => resp.data);
  },
};
