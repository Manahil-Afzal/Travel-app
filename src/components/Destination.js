import React from "react";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";
import Img3 from "../assets/3.jpg";
import Img4 from "../assets/4.jpg";

function Destination() {
  return (
    <div className="destination">
      <div className="destination-heading">
        <h1>
          <i>Popular Destination</i>
        </h1>
        <p>Tours give you the opportunity to see a lot within a time frame.</p>
      </div>

      <DestinationData
        heading="Fast Volcano, Batangas"
        text="These majestic giants have witnessed the rise and fall of ages, unmoved yet full of life.

Nestled between them lie the valleys, serene and fertile. Here, nature breathes gently. The air is calm,
and the land embraces life with open arms—flowers bloom, trees dance in the breeze, and birds sing songs of peace.
Valleys are the heart of the mountains, cradling villages, meadows, and the quiet rhythm of simple life.

Winding through both mountain and valley flows the river, a silver thread stitching the landscape together.
Born in icy heights, it rushes down with youthful energy, carving paths through stone, feeding the land it touches.
Sometimes calm, sometimes wild, the river is life in motion—ever moving, ever giving."
        img1={Img1}
        img2={Img2}
      />

      <DestinationData
        heading="Nature & Serenity, Swat Valley"
        text="Reconnect with nature in peaceful surroundings of mountains and rivers.
These valleys are like nature’s sanctuary, where time slows down and hearts find rest.
The morning mist drapes the meadows like a veil, and the chirping of birds becomes a hymn of calm. Here,
the soul breathes freely, and even the wind seems to whisper in prayer.
These serene valleys are not just land—they are emotion, stillness, and grace."
        img1={Img3}
        img2={Img4}
        reverse={true}
      />
    </div>
  );
}

export default Destination;
