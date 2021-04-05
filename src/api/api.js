import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "6c596676-f22a-4db2-9987-def9fe67b0be"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },
  follow(userID) {
    return instance.post(`follow/${userID}`)
  },
  unfollow(userID) {
    return instance.delete(`follow/${userID}`)
  },
  getProfile(userID) {
    console.warn('Obsolete method method. Please use profileAPI object');
    return profileAPI.getProfile(userID);
  }
}

export const profileAPI = {
  getProfile(userID) {
    return instance.get(`profile/` + userID);
  },
  getStatus(userID) {
    return instance.get('profile/status/' + userID);
  },
  updateStatus(status) {
    return instance.put('profile/status', { status: status });
  }
}

export const authAPI = {
  me() {
    return instance.get('auth/me');
  }
}