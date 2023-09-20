import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import getBackendData from "../utils/axios";
import ReactPlayer from "react-player";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const Homepage = () => {
  const [bannerData, setBannerData] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  const playerRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const doSomething = async () => {
    // code here...
    getBackendData(`/banner`).then((res) => {
      console.log(res);
      setBannerData(res?.data[0]);
    });
  };
  
  useEffect(() => {
    doSomething();
  }, []);
  return (
    <div className="homepage">
      <div className="mask-group-parent">
        <img className="mask-group-icon" alt="" src={bannerData?.bannerImage}/>
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
        <div className="group-item" />
        <div className="blade-runner-2049-parent">
          <b className="blade-runner-2049">{bannerData?.title}</b>
          <div className="thirty-years-after">
          {bannerData?.description}
          </div>
          <img className="group-inner" alt="" src="/group-1.svg" />
          <div className="rectangle-parent">
          <div className="video100" onClick={handlePlay}>
                {isPlaying && (
                  <ReactPlayer
                  className="custom-video-player"
                  url={bannerData?.videoUrl}
                  playing={isPlaying}
                  ref={playerRef}
                  controls
                  height="250px"
                  width="450px"
                />
                )}
      <div  className="rectangle-div" />
      <img className="polygon-icon" alt="" src="/polygon-1.svg" />
      <b className="watch-now">Watch Now</b>
      </div>
          </div>
        </div>
        <div className="group-parent" style={{top: "490px"}}>
          <div className="ri-add-fill-parent">
            <img className="ri-add-fill-icon" alt="" src="/riaddfill.svg" />
            <div className="watchlist">WATCHLIST</div>
          </div>
          <div className="ri-share-fill-parent">
            <img className="ri-share-fill-icon" alt="" src="/risharefill.svg" />
            <div className="watchlist">SHARE</div>
          </div>
        </div>
        <div className="line-div" />
        <div className="trending-now">Trending Now</div>
        <div className="horror">Horror</div>
        <div className="sci-fi">Sci- Fi</div>
        <div className="movie-sec-4">
        <div className="movies">
        <NavLink to="/Android" onClick={scrollToTop} style={{ textDecoration: 'none', color: 'white' }}>
              <img className="fan-img2-icon" alt="" src="/fanimg2@2x.png" />            
              <img className="fan-img3-icon" alt="" src="/fanimg3@2x.png" />
              <img className="fan-img4-icon" alt="" src="/fanimg4@2x.png" />
              <img className="fan-img5-1-icon" alt="" src="/fanimg5-1@2x.png" />
              <img className="fan-img5-2-icon" alt="" src="/fanimg5-2@2x.png" />
              <img className="fan-img6-icon" alt="" src="/fanimg6@2x.png" />
              <img className="fan-img7-icon" alt="" src="/fanimg7@2x.png" />
              <img className="fan-img8-icon" alt="" src="/fanimg8@2x.png" /> 
              </NavLink>
          </div>
        </div>
        <div className="movies1">
          <img className="fan-img2-icon1" alt="" src="/fanimg21@2x.png" />
          <img className="fan-img3-icon1" alt="" src="/fanimg31@2x.png" />
          <img className="fan-img4-icon1" alt="" src="/fanimg41@2x.png" />
          <img className="fan-img5-1-icon1" alt="" src="/fanimg5-11@2x.png" />
          <img className="fan-img5-2-icon1" alt="" src="/fanimg5-21@2x.png" />
          <img className="fan-img6-icon1" alt="" src="/fanimg61@2x.png" />
          <img className="fan-img7-icon1" alt="" src="/fanimg71@2x.png" />
          <img className="fan-img8-icon1" alt="" src="/fanimg81@2x.png" />
        </div>
        <div className="movie-sec-3">
          <div className="movies2">
            <img className="fan-img2-icon2" alt="" src="/fanimg22@2x.png" />
            <img className="fan-img3-icon2" alt="" src="/fanimg32@2x.png" />
            <img className="fan-img4-icon2" alt="" src="/fanimg42@2x.png" />
            <img className="fan-img5-1-icon2" alt="" src="/fanimg5-21@2x.png"/>
            <img className="fan-img5-2-icon2" alt="" src="/fanimg5-22@2x.png" />
            <img className="fan-img6-icon2" alt="" src="/fanimg62@2x.png" />
            <img className="fan-img7-icon2" alt="" src="/fanimg72@2x.png" />
            <img className="fan-img8-icon2" alt="" src="/fanimg82@2x.png" />
          </div>
        </div>
      </div>
      <b className="watchflix" style={{fontSize: "25px",marginLeft: "15px",marginTop: "10px"}}>
        <span style={{color: "white"}}>Watch</span>
        <span className="flix">Flix</span>
      </b>    
    </div>
  );
};

export default Homepage;
