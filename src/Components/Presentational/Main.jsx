import React from 'react';
import PropTypes from 'prop-types';

import VideoList from './VideoList';

export default class Main extends React.Component {
  row=null;
  column=null;

  constructor(props) {
    super(props);
    this.hotkeyHandler = this.handleHotkey.bind(this);
  }

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
    }
  }

  downKey(event) {
    event.preventDefault();
    this.row = this.row !== null ? Math.min(this.props.videos.length - 1, this.row + 1) : 0
    this.column = 0;
    this.props.highlightVideo(this.props.videos[this.row][this.column].id)
  }

  upKey(event) {
    event.preventDefault();
    this.row = this.row !== null ? Math.max(0, this.row - 1) : 0
    this.column = 0;
    this.props.highlightVideo(this.props.videos[this.row][this.column].id)
  }

  leftKey(event) {
    event.preventDefault();
    if (!this.row) {
      this.row = 0;
    }
    this.column = this.column !== null ? Math.max(0, this.column - 1) : 0;
    this.props.highlightVideo(this.props.videos[this.row][this.column].id)
  }

  rightKey(event) {
    event.preventDefault();
    if (!this.row) {
      this.row = 0;
    }
    this.column = this.column !== null ? Math.min(this.props.videos[this.row].length - 1, this.column + 1) : 0;
    this.props.highlightVideo(this.props.videos[this.row][this.column].id)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.hotkeyHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.hotkeyHandler);
  }

  render() {
    return (
      <div>
        <h1>{this.props.activeVideo}</h1>
        {this.props.videos.map((videoArray, index) =>
          <VideoList key={index} videoArray={videoArray} onVideoClick={this.props.onVideoClick} highlightedVideo={this.props.highlightedVideo}></VideoList>
        )}
      </div>
    )
  }
}