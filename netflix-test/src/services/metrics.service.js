import Storage from "@/storage";

export default {
  addRegisterMetric() {
    let storage = Storage.getStorage();
    storage.METRICS.REGISTER_METRICS.registers++;
    Storage.saveStorage(storage);
  },

  addLoginMetric() {
    let storage = Storage.getStorage();
    storage.METRICS.LOGIN_METRICS.logins++;
    Storage.saveStorage(storage);
  },

  addUserMoviesMetric(movie) {
    const user = Storage.getUserSession();
    let storage = Storage.getStorage();
    const userMetric = findUserMetric(
      user.id,
      storage.METRICS.USER_METRICS.users
    );
    if (userMetric) {
      pushMetricToUser(user.id, movie);
    } else {
      addUserToMetrics(user);
      pushMetricToUser(user.id, movie);
    }
  }
};

const findUserMetric = (userId, userMetrics) => {
  return userMetrics.find(metric => metric.userId == userId);
};

const addUserToMetrics = user => {
  let storage = Storage.getStorage();
  storage.METRICS.USER_METRICS.users.push({
    userId: user.id,
    movies: []
  });
  Storage.saveStorage(storage);
};

const pushMetricToUser = (userId, movie) => {
  let storage = Storage.getStorage();
  let metric = findUserMetric(userId, storage.METRICS.USER_METRICS.users);

  if (metric.movies.find(metricMovie => metricMovie.movie.id == movie.id)) {
    storage.METRICS.USER_METRICS.users
      .find(metric => metric.userId == userId)
      .movies.find(metricMovie => metricMovie.movie.id == movie.id).count++;

    Storage.saveStorage(storage);
  } else {
    storage.METRICS.USER_METRICS.users
      .find(metric => metric.userId == userId)
      .movies.push({
        movie,
        count: 1
      });

    Storage.saveStorage(storage);
  }
};
