import _ from "lodash";

export default {
  parseVideos({ items }) {
    return items.map(item => {
      return {
        id: _.get(item, "id.videoId", ""),
        title: _.get(item, "snippet.title", ""),
        description: _.get(item, "snippet.description", ""),
        thumbnails: _.get(item, "snippet.thumbnails", "")
      };
    });
  }
};
