import React from "react";
import "./HeaderMain.css";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import MobileScreenShareIcon from "@material-ui/icons/MobileScreenShare";
import LaptopIcon from "@material-ui/icons/Laptop";
function HeaderMain() {
  return (
    <div className="Header">
      <div className="space-preview">
        <div className="icon-text">
          <div className="icon-two">
            <p className="size-icon">
              <ClearAllIcon />
            </p>
            <div className="text">Sohail khan Dasboard</div>
          </div>
        </div>

        <div className="preview-box">
          <div className="display-preview">
            <p className="text-preview">
              Preview on:
              <MobileScreenShareIcon />
              <LaptopIcon />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
