import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MessageIcon from "@material-ui/icons/Message";
import SettingsIcon from "@material-ui/icons/Settings";
import "./RightMenu.css";
function RightMenu() {
  return (
    <div className="Right-content">
      <img
        className="img-set"
        src="https://lh3.googleusercontent.com/a-/AOh14Gi0Gdkvta6uV2FMsM1Ku2dBVPhLcnILE8z8RFSL1w=s96-c-rg-br100"
      />
      <p className="padding-ring">
        <NotificationsIcon />
      </p>
      <p className="padding-ring">
        <MessageIcon />
      </p>
      <p className="padding-ring">
        <SettingsIcon />
      </p>
    </div>
  );
}

export default RightMenu;
