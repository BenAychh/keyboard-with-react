import { HIGHLIGHT_VIDEO, SELECT_VIDEO} from '../actionTypes';

const initialState = {
  activeVideo: null,
  highlightedVideo: null,
}

function videos(state = initialState, action) {
  switch(action.type) {
    case HIGHLIGHT_VIDEO:
      return state.highlightedVideo !== action.id ?
        {
          ...state,
          highlightedVideo: action.id
        }
        :
        state
    case SELECT_VIDEO:
      return state.activeVideo !== action.id ?
        {
          ...state,
          activeVideo: action.id
        }
        :
        state
    default:
      return state;
  }
}

export default videos;