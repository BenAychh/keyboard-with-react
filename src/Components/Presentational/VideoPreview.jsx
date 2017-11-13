import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import videoShape from '../../shapes/video';

const VideoPreview = observer(({ video, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={video.highlighted ? 'active' : ''}
    >
      {video.name}
    </li>
  )
});

VideoPreview.propTypes = {
  activeVideo: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  video: videoShape.isRequired,
}

export default VideoPreview;