import React, { Component } from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Hero>
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          Return Home
        </Link>{" "}
      </Banner>{" "}
    </Hero>
  );
}

export default Error;
