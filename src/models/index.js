import Video from './Video';

import { types } from 'mobx-state-tree';

const Store = types
  .model('AStore', {
    activeVideo: types.optional(types.string, ''),
    videos: types.array(types.array(Video), [])
  })
  .views(self => ({
    // Utilities
  }))
  .actions(self => ({
    unhighlightAll () {
      self.videos.forEach(videosArray => videosArray.forEach(video => {
        if (video.highlighted) {
          video.highlighted = false;
        }
      }));
    },
    watchVideo (id) {
      self.activeVideo = id;
    }
  }));

export default Store;