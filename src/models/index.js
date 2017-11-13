import { HIGHLIGHT_VIDEO, SELECT_VIDEO } from '../actionTypes';

import { types } from 'mobx-state-tree';

const Store = types
  .model('AStore', {
    activeVideo: types.optional(types.string, ''),
    highlightedVideo: types.optional(types.string, '')
  })
  .views(self => ({
    // Utilities
  }))
  .actions(self => ({
    [HIGHLIGHT_VIDEO]({ id }) {
      self.highlightedVideo = id;
    },
    [SELECT_VIDEO]({ id }) {
      self.activeVideo = id;
    }
  }));

export default Store;