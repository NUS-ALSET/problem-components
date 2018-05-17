import React, { Component } from 'react';

import ALSET_YouTube from '../modules/ALSET-youtube';
import VideoStats from './videoStats';

class Video extends Component {
  constructor() {
    super();
    this.state = {
      videoStats: [],
    };
    this.handleReady = this.handleReady.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handlePlaybackRateChange = this.handlePlaybackRateChange.bind(this);
    this.handlePlaybackQualityChange = this.handlePlaybackQualityChange.bind(this);
    this.handleResponseSubmit = this.handleResponseSubmit.bind(this);
  }

  handleReady(event) {
    console.log('Ready');
    console.log(event);
  }
  handlePlay(event) {
    console.log('Play');
    console.log(event);
    this.setState({
      videoStats: [...this.state.videoStats, { event: 'Play', timeInSec: event.target.getCurrentTime() }],
    });
  }
  handlePause(event) {
    console.log('Pause');
    console.log(event);
    this.setState({
      videoStats: [...this.state.videoStats, { event: 'Pause', timeInSec: event.target.getCurrentTime() }],
    });
  }
  handleEnd(event) {
    console.log('End');
    console.log(event);
  }
  handleError(event) {
    console.log('Error');
    console.log(event);
  }
  handleStateChange(event) {
    console.log('StateChange');
    console.log(event);
  }
  handlePlaybackRateChange(event) {
    console.log('handlePlaybackRateChange');
    console.log(event);
  }
  handlePlaybackQualityChange(event) {
    console.log('PlaybackQualityChange');
    console.log(event);
  }
  handleResponseSubmit(answer) {
    console.log('Answer: ', answer);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ videoStats: [] });
  }
  render() {
    const { selectedVideo } = this.props;
    const { videoStats } = this.state;
    const opts = {
      height: '400',
      width: '100%',
      playerVars: {
        autoplay: 0,
      },
    };

    return (
      <div style={{ marginTop: '100px', width: '100%', textAlign: 'center' }}>
        <ALSET_YouTube
          videoId={selectedVideo.videoId}
          id={'0'}
          className={''}
          opts={opts}
          question={selectedVideo.question}
          onReady={this.handleReady}
          onPlay={this.handlePlay}
          onPause={this.handlePause}
          onEnd={this.handleEnd}
          onError={this.handleError}
          onStateChange={this.handleStateChange}
          onPlaybackRateChange={this.handlePlaybackRateChange}
          onPlaybackQualityChange={this.handlePlaybackQualityChange}
          submitResponse={this.handleResponseSubmit}
        />
        <VideoStats videoStats={videoStats} />
      </div>
    );
  }
}

export default Video;
