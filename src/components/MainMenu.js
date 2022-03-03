import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import "./MainMenu.css";
function MainMenu() {
  return (
    <div className="main-component">
      <div className="flex-virtual">
        <h3 className="text-main-componentone">Virtual/Hybrid Center</h3>

        <p className="margin-iconone">
          <CancelIcon />
        </p>
      </div>
      <p className="vertical-line">
        -----------------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>
    </div>
  );
}

export default MainMenu;
