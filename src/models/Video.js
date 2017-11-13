import { types } from 'mobx-state-tree';

const Video = types
  .model({
    id: types.string,
    name: types.string,
    highlighted: types.optional(types.boolean, false),
  })
  .actions(self => ({
    highlight() {
      self.highlighted = true;
    }
  }));

export default Video;