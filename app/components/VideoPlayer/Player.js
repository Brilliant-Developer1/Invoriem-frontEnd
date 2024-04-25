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
        {!isPlaying &&
        <div className='flex justify-center '>
        <button onClick={handlePlay} className={`absolute inset-y-0 `}>
        <svg width="70px" height="70px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M11.0748 7.50835C9.74622 6.72395 8.25 7.79065 8.25 9.21316V14.7868C8.25 16.2093 9.74622 17.276 11.0748 16.4916L15.795 13.7048C17.0683 12.953 17.0683 11.047 15.795 10.2952L11.0748 7.50835ZM9.75 9.21316C9.75 9.01468 9.84615 8.87585 9.95947 8.80498C10.0691 8.73641 10.1919 8.72898 10.3122 8.80003L15.0324 11.5869C15.165 11.6652 15.25 11.8148 15.25 12C15.25 12.1852 15.165 12.3348 15.0324 12.4131L10.3122 15.2C10.1919 15.271 10.0691 15.2636 9.95947 15.195C9.84615 15.1242 9.75 14.9853 9.75 14.7868V9.21316Z" fill="#fff"></path> <path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#fff"></path> </g></svg>
        </button>
      </div>
        }
      <div className="player__controls">
        <div className="video_time">
          <div className="current_time">{formatTime(currentTime)}</div>
          <div className="total_time">{formatTime(totalTime) }</div>
        </div>
        <div className="player__controls_bar">
          <div className="progress" ref={progressRef} onClick={scrub}><div className="progress__filled" style={{ flexBasis: `${progressPercentage}%` }}></div>
          </div>
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
 
