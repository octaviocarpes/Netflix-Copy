import ls from "local-storage";
import User from "./models/user.model";
import { STORAGE_KEY } from "@/constants/keys";

export default {
  initiateStorage() {
    ls.set(STORAGE_KEY, {
      USERS: [],
      METRICS: {
        REGISTER_METRICS: {
          registers: 0
        },
        LOGIN_METRICS: {
          logins: 0
        },
        USER_METRICS: {
          users: [],
          topUser: null,
          totalUsers: 0
        },
        MOVIES_METRICS: {
          movies: [],
          totalViews: 0,
          topMovie: null
        }
      }
    });
  },

  getStorage() {
    return ls.get(STORAGE_KEY);
  },

  saveStorage(storage) {
    ls.set(STORAGE_KEY, storage);
  },

  registerUser(username, password) {
    const user = new User(username, password);
    let storage = this.getStorage();
    storage.USERS.push(user);
    this.saveStorage(storage);
  },

  getUser(key) {
    const storage = this.getStorage();
    return storage.USERS.find(user => user.id == key);
  },

  saveUserSession(user) {
    window.sessionStorage.setItem("SESSION", JSON.stringify(user));
  },

  getUserSession() {
    return JSON.parse(window.sessionStorage.getItem("SESSION"));
  },

  endUserSession() {
    window.sessionStorage.setItem("SESSION", null);
  },

  getMetrics() {
    const storage = this.getStorage();
    return storage.METRICS;
  },

  getUsers() {
    const storage = this.getStorage();
    return storage.USERS;
  }
};
