import React from 'react';
import PropTypes from 'prop-types';

import videoShape from '../../shapes/video';

const VideoPreview = ({ video, onClick, highlightedVideo }) => {
  return (
    <li
      onClick={onClick}
      className={video.id === highlightedVideo ? 'active' : ''}
    >
      {video.name}
    </li>
  )
}

VideoPreview.propTypes = {
  activeVideo: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  video: videoShape.isRequired,
}

export default VideoPreview;