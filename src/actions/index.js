import { HIGHLIGHT_VIDEO, SELECT_VIDEO } from '../actionTypes';

// Pink frame
export function setHighlightedVideo(id) {
  return {
    type: HIGHLIGHT_VIDEO,
    id
  }
}

// Video being watched
export function setActiveVideo(id) {
  return {
    type: SELECT_VIDEO,
    id
  }
}