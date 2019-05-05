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

  addUserMoviesMetric(movieId) {
    const user = Storage.getUserSession();
    let storage = Storage.getStorage();
    const userMetric = findUserMetric(
      user.id,
      storage.METRICS.USER_METRICS.users
    );
    if (userMetric) {
      pushMetricToUser(user.id, movieId);
    } else {
      addUserToMetrics(user);
      pushMetricToUser(user.id, movieId);
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

const pushMetricToUser = (userId, movieId) => {
  let storage = Storage.getStorage();
  let metric = storage.METRICS.USER_METRICS.users.find(
    metric => metric.userId == userId
  );

  if (metric.movies.find(movie => movie.movieId == movieId)) {
    storage.METRICS.USER_METRICS.users
      .find(metric => metric.userId == userId)
      .movies.find(movie => movie.movieId == movieId).count++;

    Storage.saveStorage(storage);
  } else {
    storage.METRICS.USER_METRICS.users
      .find(metric => metric.userId == userId)
      .movies.push({
        movieId,
        count: 1
      });

    Storage.saveStorage(storage);
  }
};
