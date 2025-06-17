// src/components/Trip.js
import React from "react";
import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="A Journey Through Indonesia – The Land of Islands and Wonder 🇮🇩"
        />
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Kuala Lumpur, vibrant heart of the nation, with iconic Petronas Towers."
        />
        <TripData
          image={Trip3}
          heading="Trip in France"
          text="Paris, the crown jewel, whispers poetry beneath the Eiffel Tower."
        />
      </div>
    </div>
  );
}

export default Trip;
