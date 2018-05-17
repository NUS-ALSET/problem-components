import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

import Question from './components/question';

class ALSET_YouTube extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { playCount, pauseCount } = this.state;
    const { containerClassName, question, submitResponse } = this.props;
    const youtubePanel = (
      <YouTube
        videoId={this.props.videoId}
        id={this.props.id}
        className={this.props.className}
        opts={this.props.opts}
        onReady={this.props.onReady}
        onError={this.props.onError}
        onStateChange={this.props.onStateChange}
        onPlaybackRateChange={this.props.onPlaybackRateChange}
        onPlaybackQualityChange={this.props.onPlaybackQualityChange}
        onPlay={this.props.onPlay}
        onPause={this.props.onPause}
        onEnd={this.props.onEnd}
      />
    );

    const questionPanel = <Question question={question} onSubmit={submitResponse} />;

    return (
      <div className={containerClassName}>
        {youtubePanel}
        {questionPanel}
      </div>
    );
  }
}

ALSET_YouTube.propTypes = {
  videoId: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  opts: PropTypes.object,
  onReady: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnd: PropTypes.func,
  onError: PropTypes.func,
  onStateChange: PropTypes.func,
  onPlaybackRateChange: PropTypes.func,
  onPlaybackQualityChange: PropTypes.func,
  containerClassName: PropTypes.string,
  question: PropTypes.string,
  submitResponse: PropTypes.func,
};

export default ALSET_YouTube;
