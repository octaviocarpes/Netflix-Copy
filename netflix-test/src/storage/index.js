import ls from "local-storage";
import User from "./models/user.model";

export default {
  registerUser(username, password) {
    const user = new User(username, password);
    const key = btoa(username + password);
    ls.set(key, user);
  },

  getUser(key) {
    return ls.get(key);
  },

  getMetrics(key) {
    return ls.get(key);
  },

  registerMetrics(key, metrics) {
    ls.set(key, metrics);
  }
};
