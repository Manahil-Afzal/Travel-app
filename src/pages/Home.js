import React from "react";
import Hero from "../components/Hero";
import Destination from "../components/Destination";

function Home() {
  return (
    <>
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1470&auto=format&fit=crop"
        title="Your Journey Your Story"
        text="Choose your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="hero-btn"
      />
      <Destination />
      {/* Remove any <h2> or repeated "Your Journey Your Story" from here */}
    </>
  );
}

export default Home;
