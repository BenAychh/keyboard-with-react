import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';


// Random "video" data
import VideoList from './VideoList';

const Main = observer(class Main extends React.Component {
  row=null;
  column=null;

  constructor(props) {
    super(props);
    // So we don't have to call bind every time
    this.hotkeyHandler = this.handleHotkey.bind(this);
  }

  // Only handles the arrow keys so nothing else is affected
  handleHotkey(event) {
    switch (event.code) {
      case 'ArrowDown':
        return this.downKey.call(this, event);
      case 'ArrowUp':
        return this.upKey.call(this, event);
      case 'ArrowLeft':
        return this.leftKey.call(this, event);
      case 'ArrowRight':
        return this.rightKey.call(this, event);
      case 'Enter':
        return this.enterKey.call(this, event);
    }
  }

  downKey(event) {
    event.preventDefault();
    this.row = this.row !== null ? Math.min(this.props.store.videos.length - 1, this.row + 1) : 0
    this.column = 0;
    this.props.store.unhighlightAll();
    this.props.store.videos[this.row][this.column].highlight();
  }

  upKey(event) {
    event.preventDefault();
    this.row = this.row !== null ? Math.max(0, this.row - 1) : 0
    this.column = 0;
    this.props.store.unhighlightAll();
    this.props.store.videos[this.row][this.column].highlight();
  }

  leftKey(event) {
    event.preventDefault();
    if (!this.row) {
      this.row = 0;
    }
    this.column = this.column !== null ? Math.max(0, this.column - 1) : 0;
    this.props.store.unhighlightAll();
    this.props.store.videos[this.row][this.column].highlight();
  }

  rightKey(event) {
    event.preventDefault();
    if (!this.row) {
      this.row = 0;
    }
    this.column = this.column !== null ? Math.min(this.props.store.videos[this.row].length - 1, this.column + 1) : 0;
    this.props.store.unhighlightAll();
    this.props.store.videos[this.row][this.column].highlight();
  }

  // We already have the id because the video is highlighted, now just make it the video being watched.
  enterKey(event) {
    event.preventDefault();
    if (this.row !== null && this.column !== null) {
      this.props.store.watchVideo(this.props.store.videos[this.row][this.column].id);
    }
  }

  // Attach a keyboard listener to this component
  componentDidMount() {
    document.addEventListener('keydown', this.hotkeyHandler);
  }

  // Detatch the keyboard listener
  componentWillUnmount() {
    document.removeEventListener('keydown', this.hotkeyHandler);
  }

  render() {
    return (
      <div>
        <h1>video being played: {this.props.store.activeVideo}</h1>
        {this.props.store.videos.map((videoArray, index) =>
          <VideoList key={index} videoArray={videoArray} watchVideo={this.props.store.watchVideo}></VideoList>
        )}
      </div>
    )
  }
});

export default Main;