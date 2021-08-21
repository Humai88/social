import axios, { AxiosResponse } from "axios";

// export type UserDataType = {
//   name: string;
//   id: number;
//   staturs: string;
//   photos: PhotoesType;
//   followed: boolean;
// };
// type PhotoesType = {
//   small: string;
//   large: string;
// };
// export type UsersResponseType = {
//   items: UserDataType[];
//   totalCount: number;
//   error: null | string;
// };

type ContactsType = {
  github: string | null;
  vk: string | null;
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  website: string | null;
  youtube: string | null;
  mainLink: string | null;
};

export type PhotosType = {
  small: string;
  large: string;
};

export type ProfileResponseType = {
  aboutMe: string | null;
  contacts: ContactsType;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: PhotosType;
} | null;

type ResponseType<D = {}> = {
  resultCode: number;
  messages: Array<string>;
  data: D;
};
const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "b108fd33-d977-4add-bda9-9da2037bdf7a",
  },
});

// Users API
export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((resp: AxiosResponse) => resp.data);
  },
};

// Auth API
export const authAPI = {
  userAuth() {
    return instance.get(`auth/me`).then((resp: AxiosResponse) => resp.data);
  },
};

// Profile API
export const profileAPI = {
  getProfile(userId: string) {
    return instance
      .get<ProfileResponseType>(`profile/` + userId)
      .then((resp) => resp.data);
  },
  getStatus(userId: string) {
    return instance
      .get<string>(`profile/status/` + userId)
      .then((resp) => resp.data);
  },
  updateStatus(status: string) {
    return instance
      .put(`profile/status/`, { status: status })
      .then((resp) => resp.data);
  },
};

// Follow API
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
