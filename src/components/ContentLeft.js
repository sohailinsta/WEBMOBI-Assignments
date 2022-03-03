import React from "react";
import "./ContentLeft.css";

function ContentLeft() {
  return (
    <div className="main-content">
      <h4 className="content-text">Event Content</h4>
      <p className="vertical-line">---------------------------</p>
      <p className="text-contentone">Basic</p>

      <p className="text-contenttwo">Branding</p>
      <p className="text-contentthree">Agenda</p>
      <p className="box-virtual">
        <p className="text-contentoneunique">Virtual/Hybrid Center</p>
      </p>
      <p className="text-contentfour">Speaker Center</p>
      <p className="text-contentfive">Sponsor Center</p>
    </div>
  );
}

export default ContentLeft;
