import React from "react";
import Profile from "./Profile/Profile";
import Header from "./Header/Header";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Profile />
    </div>
  );
}
