import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
const Categories = () => {
 
  return (
    <div className="categories12">
      <div className="rectangle-parent12">
        <div className="group-child12" />
        <div className="sign-up-parent12">
        <Link to="/SignUpForm" className="sign-up12" style={{ textDecoration: "none", color: "white" }}>
          <b>Sign up</b>
        </Link>
          <img className="bxbx-search-icon12" alt="" src="/bxbxsearch.svg" />
          <img
            className="claritybell-outline-badged-icon12"
            alt=""
            src="/claritybelloutlinebadged.svg"
          />
        </div> 
      </div>
      <b className="watchflix12" style={{fontSize: "25px",marginLeft: "10px",marginTop: "90px"}}>
        <span>Watch</span>
        <span className="flix12">Flix</span>
      </b>
      <img
        className="screenshot-2023-04-04-at-34312"
        alt=""
        src="/screenshot-20230404-at-343-1@2x.png"
      />
      <img
        className="screenshot-2023-04-04-at-34112"
        alt=""
        src="/screenshot-20230404-at-341-1@2x.png"
      />
      <img
        className="screenshot-2023-04-04-at-33812"
        alt=""
        src="/screenshot-20230404-at-338-1@2x.png"
      />
      <img
        className="screenshot-2023-04-04-at-33512"
        alt=""
        src="/screenshot-20230404-at-335-1@2x.png"
      />
      <img
        className="screenshot-2023-04-04-at-33412"
        alt=""
        src="/screenshot-20230404-at-334-1@2x.png"
      />
      <img
        className="screenshot-2023-04-04-at-33312"
        alt=""
        src="/screenshot-20230404-at-333-1@2x.png"
      />
      <img
        className="screenshot-2023-04-04-at-33112"
        alt=""
        src="/screenshot-20230404-at-331-1@2x.png"
      />
      <img
        className="screenshot-2023-04-04-at-33012"
        alt=""
        src="/screenshot-20230404-at-330-1@2x.png"
      />
      <img
        className="screenshot-2023-04-04-at-32912"
        alt=""
        src="/screenshot-20230404-at-329-1@2x.png"
      />
      <img
        className="screenshot-2023-04-04-at-32412"
        alt=""
        src="/screenshot-20230404-at-324-1@2x.png"
      />
      <img
        className="screenshot-2023-04-04-at-32712"
        alt=""
        src="/screenshot-20230404-at-327-1@2x.png"
      />
      <img
        className="screenshot-2023-04-04-at-32612"
        alt=""
        src="/screenshot-20230404-at-326-1@2x.png"
      />
      <div className="categories-child12" />
      <div className="categories-item12" />
      <div className="categories-inner12" />
      <div className="rectangle-div12" />
      <div className="categories-child112" />
      <div className="categories-child212" />
      <div className="categories-child312" />
      <div className="categories-child412" />
      <div className="categories-child512" />
      <div className="categories-child612" />
      <div className="categories-child712" />
      <div className="categories-child812" />
      <div className="action-adventure12">{`Action & Adventure`}</div>
      <div className="anime12">Anime</div>
      <div className="comedy12">Comedy</div>
      <div className="documentary12">Documentary</div>
      <div className="drama12">Drama</div>
      <div className="mystery-thrillers-container12">
        <p className="mystery12">Mystery &</p>
        <p className="mystery12">Thrillers</p>
      </div>
      <div className="fantasy12">Fantasy</div>
      <div className="horror12">Horror</div>
      <div className="romance12">Romance</div>
      <div className="sci-fi12">Sci -Fi</div>
      <div className="kids12">Kids</div>
      <div className="sports12">Sports</div>
    </div>
  );
};

export default Categories;
