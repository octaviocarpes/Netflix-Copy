import _ from "lodash";
import Storage from "@/storage";

export const MOVIES_METRICS = {
  getMetrics() {
    return _.get(Storage.getStorage(), "METRICS.MOVIES_METRICS", {});
  },

  getTotalViews() {
    return _.get(Storage.getStorage(), "METRICS.MOVIES_METRICS.totalViews", 0);
  },

  getMoviesCount() {
    return _.get(Storage.getStorage(), "METRICS.MOVIES_METRICS.movies", [])
      .map(metric => metric.count)
      .slice(0, 4);
  },

  getMoviesTitles() {
    return _.get(Storage.getStorage(), "METRICS.MOVIES_METRICS.movies", [])
      .map(metric => metric.movie.title)
      .slice(0, 4);
  },

  getTopMovie() {
    return _.get(
      Storage.getStorage(),
      "METRICS.MOVIES_METRICS.movies",
      []
    ).reduce((previous, top) => {
      return previous.count > top.count ? previous : top;
    });
  }
};
