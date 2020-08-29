import React, { Component } from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/roomsContainer";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our Rooms">
          <Link to="/" className="btn-primary">
            return home{" "}
          </Link>{" "}
        </Banner>{" "}
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
