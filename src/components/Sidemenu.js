import React from "react";
import "./SideMenu.css";
import WidgetsIcon from "@material-ui/icons/Widgets";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import PeopleIcon from "@material-ui/icons/People";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import DraftsIcon from "@material-ui/icons/Drafts";
function Sidemenu() {
  return (
    <div className="container-box">
      <div className="first-icon-boxone">
        <WidgetsIcon className="icon"></WidgetsIcon>
        <p className="text-icon">Widgets</p>
      </div>

      <div className="first-icon-box">
        <InsertChartIcon className="icon"></InsertChartIcon>
        <p className="text-icon">Event</p>
      </div>

      <div className="first-icon-box-event">
        <PeopleIcon className="icon"></PeopleIcon>
        <p className="text-icon">Team</p>
      </div>

      <div className="first-icon-box">
        <DraftsIcon className="icon"></DraftsIcon>
        <p className="text-icon">Team</p>
      </div>

      <div className="first-icon-box">
        <ShowChartIcon className="icon"></ShowChartIcon>
        <p className="text-icon">Team</p>
      </div>
    </div>
  );
}

export default Sidemenu;
