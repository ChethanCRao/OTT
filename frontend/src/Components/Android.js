import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

const Android = () => {

  const [movieData, setMovieData] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  let location = useLocation();

  useEffect(() => {
    const movie = location?.state?.movieItem;
    console.log(movie);
    setMovieData(movie);
  }, [location?.state?.movieItem]);

  const playerRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <div className="android">
      <div className="rectangle-parent" style={{marginRight: "300px"}}>
        <div className="group-child" />
        <div className="group-item" />
      </div>
      <img className="ri-menu-fill-icon" alt="" src="/rimenufill.svg" />
      <img className="bxbx-search-icon" alt="" src="/bxbxsearch.svg" />
      <div className="android-child" />
      <div className="mask-group-parent">
        <img className="mask-group-icon22" alt="" src={movieData?.banner} />
        <div className="rectangle-group">
          <div className="group-inner" />
          <div className="tenet22">{movieData?.title}</div>
          <div className="h-30-min1">{parseFloat(movieData?.imdbrating)}
          &nbsp;&nbsp;&nbsp;&nbsp;2 h 30 min &nbsp;&nbsp;&nbsp;&nbsp;
          {movieData?.released}</div>
          <img className="xmlid-1-icon1" alt="" src="/xmlid-1.svg" />
          <div className="types">
            <div className="action1">Action</div>
          </div>
          <div className="types11">
            <div className="action2">Science Fiction</div>
          </div>
          <div className="types21">
            <div className="action3">Suspense</div>
          </div>
          <div className="types31">
            <div className="action4">Drama</div>
          </div>
          <div className="armed-with-only1">
            Armed with only one word, Tenet, and fighting for the survival of
            the<br/>entire world, a Protagonist journeys through a twilight world of<br/>
            international espionage on a mission that will unfold in something beyond<br/>
            real time.
          </div>
          <div className="video200" onClick={handlePlay}>
  <div className="video-overlay">
    {isPlaying && (
      <ReactPlayer
        className="custom-video-player100"
        url={movieData?.videourl}
        playing={isPlaying}
        ref={playerRef}
        controls
        height="250px"
        width="450px"
      />
    )}
  </div>
  <img
    style={{ cursor: "pointer" }}
    className="ri-play-circle-fill-icon1"
    alt=""
    src="/riplaycirclefill.svg"
  />
</div>
          <div className="group-parent" style={{marginLeft: "28%"}}>
            <div className="ri-add-fill-parent" style={{marginLeft: "10%"}}>
              <img style={{width: "27px"}} className="ri-add-fill-icon" alt="" src="/riaddfill.svg" />
              <div style={{fontSize: "15px"}} className="watchlist">WATCHLIST</div>
            </div>
            <div className="ri-share-fill-parent">
              <img style={{width: "27px"}}
                className="ri-share-fill-icon"
                alt=""
                src="/risharefill.svg" 
              />
              </div>
              <div className="share" style={{fontSize: "15px",color: "white",marginTop: "39px",fontWeight: "bolder",marginLeft: "90%"}}>SHARE</div>
          </div>
        </div>
        <div className="more-like" style={{ color: "white", position: "absolute", top: "42%", left: "23.7%", fontSize: "22px" }}>
        More Like This
      </div>
      </div>
      <div className="movie-sec-4">
        <div className="movies" style={{marginTop: "40px",marginLeft: "293px"}}>
          <img className="fan-img2-icon" alt="" src="/fanimg2@2x.png" />
          <img className="fan-img3-icon" alt="" src="/fanimg3@2x.png" />
          <img className="fan-img4-icon" alt="" src="/fanimg4@2x.png" />
          <img className="fan-img8-icon" alt="" src="/fanimg8@2x.png" />
        </div>
      </div>
      <div className="android-inner">
      </div>
      <b className="watchflix" style={{ fontSize: "24px", marginLeft: "43%", position: "absolute", top: "7px" }}>
        <span style={{ color: "white" }}>Watch</span>
        <span className="flix">Flix</span>
      </b>
    </div>
  );
};

export default Android;
