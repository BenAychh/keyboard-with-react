import React from 'react';
import PropTypes from 'prop-types';

import VideoPreview from './VideoPreview';
import videoShape from '../../shapes/video';

const VideoList = ({ videoArray, watchVideo, highlightedVideo }) =>
  (
    <ul>
      {videoArray.map((video) =>
        <VideoPreview
          key={video.id}
          video={video}
          onClick={() => watchVideo(video.id)}
          highlightedVideo={highlightedVideo}>
        </VideoPreview>
      )}
    </ul>
  )

VideoList.propTypes = {
  activeVideo: PropTypes.string,
  onVideoClick: PropTypes.func.isRequired,
  videoArray: PropTypes.arrayOf(videoShape).isRequired,
}

export default VideoList;