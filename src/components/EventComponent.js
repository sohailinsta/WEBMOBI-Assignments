import React from "react";
import "./EventComponent.css";

function EventComponent() {
  return (
    <div className="event-main">
      <p className="event">
        Event settings
        <p className="line">|</p>
      </p>

      <p className="event1">
        Engage and Network
        <p className="line">|</p>
      </p>

      <p className="event1">
        Event Marketing
        <p className="line">|</p>
      </p>

      <p className="event1">
        Tickets
        <p className="line">|</p>
      </p>

      <p className="event1">
        Attendees
        <p className="line">|</p>
      </p>

      <div className="background">
        <p className="event2">
          Event Content
          <p className="line2">|</p>
        </p>
      </div>

      <p className="event1">
        Publish
        <p className="line">|</p>
      </p>
    </div>
  );
}

export default EventComponent;
