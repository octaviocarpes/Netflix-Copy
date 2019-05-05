import _ from "lodash";
import Storage from "@/storage";

export const ACCESS_METRICS = {
  getLogins() {
    return _.get(Storage.getStorage(), "METRICS.LOGIN_METRICS.logins", 0);
  },

  getRegisters() {
    return _.get(Storage.getStorage(), "METRICS.REGISTER_METRICS.registers", 0);
  }
};
