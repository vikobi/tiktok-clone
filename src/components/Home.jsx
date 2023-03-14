import React from "react";
import "../styles/Home.css";
import logo from '../assets/logo.png'
import VideoCard from "./VideoCard";

function Home() {
  return (
    <>
      <div className="app_top">
        <img src={logo} alt="logo" className="app_logo" />
        <h3>Shorts</h3>
      </div>

      <div className="app_videos">

      <VideoCard />
      <VideoCard />
      </div>
     
    </>
  );
}

export default Home;
