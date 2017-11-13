import { connect } from 'react-redux';
import { setActiveVideo, setHighlightedVideo } from '../../actions';
import Main from '../Presentational/Main';

import videos from '../../fakeData';

const mapStateToProps = state => {
  return {
    activeVideo: state.activeVideo,
    highlightedVideo: state.highlightedVideo,
    videos,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onVideoClick: id => dispatch(setActiveVideo(id)),
    highlightVideo: id => dispatch(setHighlightedVideo(id)),
  }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;