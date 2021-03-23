import React, { Component } from "react";

import './homepage.styles.scss';

const Homepage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Hats</h1>
          <span className="subtitle">Shop Name</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">jackets</h1>
          <span className="subtitle">Shop Name</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">sneakers</h1>
          <span className="subtitle">Shop Name</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">womens</h1>
          <span className="subtitle">Shop Name</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">mens</h1>
          <span className="subtitle">Shop Name</span>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;