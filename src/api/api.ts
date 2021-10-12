import axios from "axios";

// Instance
const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "f55312fa-da02-4f9d-ab69-743608146acf",
  },
});

// Users API
export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((resp) => resp.data);
  },
};

// Auth API
export const authAPI = {
  userAuth() {
    return instance
      .get<ResponseType<DataAuthType>>(`auth/me`)
      .then((resp) => resp.data);
  },

  login(email: string, password: string, rememberMe: boolean = false) {
    return instance
      .post<ResponseType>(`auth/login`, {
        email,
        password,
        rememberMe,
      })
      .then((resp) => resp.data);
  },

  logout() {
    return instance
      .delete<ResponseType<{ userId: number }>>(`auth/login`)
      .then((resp) => resp.data);
  },
};

// Profile API
export const profileAPI = {
  getProfile(userId: number) {
    return instance
      .get<ProfileResponseType>(`profile/` + userId)
      .then((resp) => resp.data);
  },
  getStatus(userId: number) {
    return instance
      .get<string>(`profile/status/` + userId)
      .then((resp) => resp.data);
  },
  updateStatus(status: string) {
    return instance
      .put<ResponseType>(`profile/status/`, { status: status })
      .then((resp) => resp.data);
  },
  savePhoto(photoFile: File) {
    let formData = new FormData();
    formData.append("image", photoFile);
    return instance
      .put<ResponseType<{ photos: PhotosType }>>(`profile/photo/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((resp) => resp.data);
  },
};

// Follow API
export const followAPI = {
  setFollow(id: number) {
    return instance
      .post<ResponseType>(`follow/${id}`)
      .then((resp) => resp.data);
  },
  setUnfollow(id: number) {
    return instance
      .delete<ResponseType>(`follow/${id}`)
      .then((resp) => resp.data);
  },
};

// Types
type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type PhotosType = {
  small: string;
  large: string;
};

export type ProfileResponseType = {
  aboutMe: string;
  contacts: ContactsType;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number | null;
  photos: PhotosType;
};

export type ResponseType<D = {}> = {
  resultCode: number;
  messages: Array<string>;
  data: D;
};

type DataAuthType = {
  id: number;
  email: string;
  login: string;
};

export type UserType = {
  id: number;
  followed: boolean;
  name: string;
  status: string;
  location: LocationType;
  photos: PhotosType;
};

type GetUsersType = {
  items: UserType[];
  totalCount: number;
  error: null | string;
};

export type LocationType = {
  city: string;
  country: string;
};
