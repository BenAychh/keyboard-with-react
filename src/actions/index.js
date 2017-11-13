import { HIGHLIGHT_VIDEO, SELECT_VIDEO } from '../actionTypes';

export function setHighlightedVideo(id) {
  return {
    type: HIGHLIGHT_VIDEO,
    id
  }
}

export function setActiveVideo(id) {
  return {
    type: SELECT_VIDEO,
    id
  }
}