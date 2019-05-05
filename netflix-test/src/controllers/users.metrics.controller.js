import _ from "lodash";
import Storage from "@/storage";

export const USERS_METRICS = {
  getMetrics() {
    return _.get(Storage.getStorage(), "METRICS.USER_METRICS", {});
  },

  getUsers() {
    return _.get(Storage.getStorage(), "METRICS.USER_METRICS.users", []);
  },

  getUsersNames() {
    return _.get(Storage.getStorage(), "METRICS.USER_METRICS.users", [])
    .map(metric => metric.user.username);
  },

  getUsersCount() {
    return _.get(Storage.getStorage(), "METRICS.USER_METRICS.users", [])
    .map(user => user.totalViews);
  },

  getTopUser() {
    return _.get(Storage.getStorage(), "METRICS.USER_METRICS.users", [])
    .reduce((previousTopUser, topUser) => {
      return previousTopUser.totalViews > topUser.totalViews ? previousTopUser : topUser;
    })
  }
};
