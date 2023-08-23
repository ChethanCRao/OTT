import React from "react";
import "../App.css";
import { NavLink } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export default function Footer() {
  return (
    <div>
      <div className="group-child1" style={{width: "106.5%"}}/>
      <b className="connect-us">Connect Us</b>
      <b className="manage">Manage</b>
      <b className="information">Information</b>
      <div className="about">-About</div>
      <div className="help-center">-Help Center</div>
      <div className="career">-Career</div>
      <div className="contact-us">-Contact Us</div>
      <div className="account-parent">
      <NavLink to="/SignUpForm" onClick={scrollToTop} style={{ textDecoration: 'none', color: 'white' }}>
          <div className="account">-Account</div>
        </NavLink>
        <div className="buy-gift-card">-Buy Gift Card</div>
        <div className="redeem-gift-card">-Redeem Gift Card</div>
        <div className="manage-account">-Manage Account</div>
      </div>
      <div className="privacy-parent" style={{ color: "white" }}>
        <div className="account">-Privacy</div>
        <div className="buy-gift-card">-Cookies</div>
        <div className="redeem-gift-card">-FAQ</div>
        <div className="manage-account">-Terms & condition</div>
      </div>
      <b className="watchflix1">
        <span style={{ color: "white" }}>Watch</span>
        <span className="flix">Flix</span>
      </b>
    </div>
  );
}
