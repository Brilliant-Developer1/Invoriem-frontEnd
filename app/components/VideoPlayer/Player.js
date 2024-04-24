'use client'
import React, { useState, useRef, useEffect } from 'react';
import './Player.css'


export const Player = ({url,thumb}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const progressRef = useRef(null);
  const volumeRef = useRef(null);
  const playbackRateRef = useRef(null);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.src = url;
    videoRef.current.poster = thumb
  }, [url,thumb]);
//   

  useEffect(() => {
    const handleSpaceKey = (event) => {
      if (event.code === 'Space') {
        event.preventDefault();
        handlePlay();
      }
    };

    document.addEventListener('keydown', handleSpaceKey);

    return () => {
      document.removeEventListener('keydown', handleSpaceKey);
    };
  }, []);

  


  const handlePlay = () => {
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      
    } else {
        
      videoRef.current.requestFullscreen().catch(err => {
        console.error('Fullscreen request failed:', err);
      });
    }
  };

  const formatTime = seconds => {
    if (isNaN(seconds)) {
        
        return '0:00';
      }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleProgress = () => {
    const progressPercentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgressPercentage(progressPercentage);
    setCurrentTime(videoRef.current.currentTime);
    setTotalTime(videoRef.current.duration);
    
  };

  const scrub = e => {
    const scrubTime = (e.nativeEvent.offsetX / progressRef.current.offsetWidth) * videoRef.current.duration;
    videoRef.current.currentTime = scrubTime;
  };
  const handleSliderUpdate = (event) => {
    const { name, value } = event.target;
    if (name === 'volume') {
      setVolume(value);
      videoRef.current.volume = value;
    } else if (name === 'playbackRate') {
      setPlaybackRate(value);
      videoRef.current.playbackRate = value;
    }
  };

  const handleSkip = (amount) => {
    // Skip video by amount of seconds
    videoRef.current.currentTime += amount;
  };
  
  
    return (
      <section className="player my-16 container">
        <video ref={videoRef} className="player__video viewer" onClick={handlePlay} onDoubleClick={toggleFullscreen} onTimeUpdate={handleProgress}></video>
      <div className="player__controls">
        <div className="video_time">
          <div className="current_time">{formatTime(currentTime)}</div>
          <div className="total_time">{formatTime(totalTime) }</div>
        </div>
        <div className="player__controls_bar">
          <div className="progress" ref={progressRef} onClick={scrub}><div className="progress__filled" style={{ flexBasis: `${progressPercentage}%` }}></div></div>
          <div className="player__controls_buttons">
            <button className={`player__button w-12 ${isPlaying ? 'playing' : ''}`} onClick={handlePlay}>
              {isPlaying ? '❚❚' : '►'}
            </button>
            <input
              type="range"
              name="volume"
              className="player__slider"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              ref={volumeRef}
              onChange={handleSliderUpdate}
            />
            <input
              type="range"
              name="playbackRate"
              className="player__slider"
              min="0.5"
              max="2"
              step="0.1"
              value={playbackRate}
              ref={playbackRateRef}
              onChange={handleSliderUpdate}
            />
            <div>
            <button className="player__button skip" onClick={() => handleSkip(-3)} data-skip="-10">«3s</button>
          <button className="player__button skip" onClick={() => handleSkip(5)} data-skip="25">5s»</button>
              <button onClick={toggleFullscreen} className="fullscreen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fullscreen"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                  <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      </section>
    );
  };
 
