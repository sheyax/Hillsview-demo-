import React, { Component } from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import Services from "../components/services";
import FeaturedRooms from "../components/featuredroom";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $70">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>

      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
