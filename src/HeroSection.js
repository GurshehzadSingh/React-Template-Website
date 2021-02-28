import React from "react";
const HeroSection = () => {
  return (
    <div className="jumbotron ">
      <h1 className="display-4">The Website looks great!</h1>
      <p className="lead">
        <h4>Developed By: Gurshehzad Singh</h4>
        This is a sample React Template Website which covers a demo experience
        of various components of a website including a NavBar, Jumbotron
        Section, Feature Section, Get in Touch Section and Footer Section. Enjoy
        your experience ahead!
      </p>
      <hr className="my-4" />
      <p>React is truly amazing. Right?</p>
      <a className="btn btn-success btn-lg" href="#" role="button">
        React is awesome
      </a>
    </div>
  );
};
export default HeroSection;
