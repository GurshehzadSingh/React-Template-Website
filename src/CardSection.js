import React from "react";
import Card from "./Card";
const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <div className="col-4">
            <Card title="Cricket" buttonText="Go To Cricket Section" />
          </div>
          <div className="col-4">
            <Card title="Football" buttonText="Go To Football Section" />
          </div>
          <div className="col-4">
            <Card title="Tennis" buttonText="Go To Tennis Section" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CardSection;
