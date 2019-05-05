import Storage from "@/storage";
import { MOVIES_METRICS } from "@/controllers/movies.metrics.controller";

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
      pushMetricToUser(user, movie);
    } else {
      addUserToMetrics(user);
      pushMetricToUser(user, movie);
    }
  },

  addMovieMetric(movie) {
    const storage = Storage.getStorage();
    const movieMetric = findMovie(movie, storage.METRICS.MOVIES_METRICS.movies);
    if (movieMetric) {
      storage.METRICS.MOVIES_METRICS.movies.find(
        metric => metric.movie.id == movie.id
      ).count++;
      storage.METRICS.MOVIES_METRICS.totalViews++;
    } else {
      storage.METRICS.MOVIES_METRICS.movies.push({
        movie,
        count: 1
      });
      storage.METRICS.MOVIES_METRICS.totalViews++;
    }
    Storage.saveStorage(storage);
  },

  setTopMovie() {
    let storage = Storage.getStorage();
    const topMovie = MOVIES_METRICS.getTopMovie();
    storage.METRICS.MOVIES_METRICS.topMovie = topMovie;
    Storage.saveStorage(storage);
  }
};

const findMovie = (movie, metricsList) => {
  return metricsList.find(metricMovie => metricMovie.movie.id == movie.id);
};

const findUserMetric = (userId, userMetrics) => {
  return userMetrics.find(metric => metric.user.id == userId);
};

const addUserToMetrics = user => {
  let storage = Storage.getStorage();
  storage.METRICS.USER_METRICS.users.push({
    user,
    totalViews: 0,
    movies: []
  });
  storage.METRICS.USER_METRICS.totalUsers++;
  Storage.saveStorage(storage);
};

const pushMetricToUser = (user, movie) => {
  let storage = Storage.getStorage();
  let metric = findUserMetric(user.id, storage.METRICS.USER_METRICS.users);

  if (metric.movies.find(metricMovie => metricMovie.movie.id == movie.id)) {
    storage.METRICS.USER_METRICS.users
      .find(metric => metric.user.id == user.id)
      .movies.find(metricMovie => metricMovie.movie.id == movie.id).count++;

    storage.METRICS.USER_METRICS.users.find(metric => metric.user.id == user.id)
      .totalViews++;

    Storage.saveStorage(storage);
  } else {
    storage.METRICS.USER_METRICS.users
      .find(metric => metric.user.id == user.id)
      .movies.push({
        movie,
        count: 1
      });

    storage.METRICS.USER_METRICS.users.find(metric => metric.user.id == user.id)
      .totalViews++;

    Storage.saveStorage(storage);
  }
};
