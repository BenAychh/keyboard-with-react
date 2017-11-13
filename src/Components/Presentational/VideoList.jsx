import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import VideoPreview from './VideoPreview';
import videoShape from '../../shapes/video';

const VideoList = observer(({ videoArray, watchVideo }) =>
  (
    <ul>
      {videoArray.map((video) =>
        <VideoPreview
          key={video.id}
          video={video}
          onClick={() => watchVideo(video.id)}>
        </VideoPreview>
      )}
    </ul>
  )
)

VideoList.propTypes = {
  watchVideo: PropTypes.func.isRequired,
}

export default VideoList;