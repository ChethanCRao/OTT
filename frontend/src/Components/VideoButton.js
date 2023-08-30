import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const VideoButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    videoRef.current.pause();
  };

  const handleStop = () => {
    setIsPlaying(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column'}}>
      <div className="group-child" />
        <div className="sign-up-parent">
        <Link to="/SignUpForm" className="sign-up" style={{textDecoration: "none",color: "white"}}>
        <b>Sign up</b>
      </Link>
          <img className="bx-search-icon" alt="" src="/bxbxsearch.svg" />
          <img
            className="claritybell-outline-badged-icon100"
            alt=""
            src="/claritybelloutlinebadged.svg"
          />
        </div>
      <b className="watchflix" style={{fontSize: "25px",marginLeft: "15px",marginTop: "10px"}}>
      <span style={{color: "white"}}>Watch</span>
        <span className="flix">Flix</span>
        </b>
      <h2 style={{ marginBottom: '5px',color: 'white' }}>KGF Chapter2 Teaser</h2>
      <div style={{ position: 'relative' }}>
        {!isPlaying && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
            }}
          ></div>
        )}
        <video ref={videoRef} width="630" height="380" controls>
          <source src="/Videos/KGF 2.mp4" type="video/mp4" />
        </video>
      </div>
      <div style={{ marginTop: '10px' }}>
        {!isPlaying ? (
          <button
            style={{
              backgroundColor: 'blue',
              color: 'white',
              fontFamily: 'Times New Roman',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '16px',
              paddingTop: '6px',
            paddingBottom: '6px',
              marginRight: '10px',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease',
            }}
            onClick={handlePlay}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'darkblue';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'blue';
            }}>
            Play
          </button>
        ) : (
          <button
            style={{
              backgroundColor: 'purple',
              color: 'white',
              fontFamily: 'Times New Roman',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '16px',
              paddingTop: '6px',
            paddingBottom: '6px',
              marginRight: '10px',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease',
            }}
            onClick={handlePause}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'black';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'purple';
            }}
          >
            Pause
          </button>
        )}
        <button
          style={{
            backgroundColor: 'red',
            color: 'white',
            fontFamily: 'Times New Roman',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '16px',
            paddingTop: '6px',
            paddingBottom: '6px',
            marginRight: '10px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
          }}
          onClick={handleStop}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'darkred';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'red';
          }}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default VideoButton;
