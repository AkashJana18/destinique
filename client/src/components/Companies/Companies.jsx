import React from "react";
import "./Companies.css";

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="c-container flexCenter paddings innerWidth">
        <img src="./uber.png" alt="uber" />
        <img src="./airbnb.png" alt="airbnb" />
        <img src="./trivago.png" alt="trivago" />
        <img src="./expedia.png" alt="expedia" />
      </div>
    </section>
  );
};

export default Companies;
