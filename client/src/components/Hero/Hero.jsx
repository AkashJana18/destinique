import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

import "./Hero.css";
import SearchBar from "../SearchBar/SearchBar";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container flexCenter paddings innerWidth">
        {/* left-side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
             Discover <br /> Most Suitable <br /> Location
            </motion.h1>
          </div>

          <div className="hero-desc flexColStart">
            <span className="secondaryText">
            At Destinique, we believe in the transformative power of travel.
            </span>
            <span className="secondaryText">
            Our mission is simple — to be your trusted companion in planning remarkable journeys.
            </span>
          </div>

          <SearchBar />

          <div className="flexStart stats">
            <div className="flexColCenter stats">
              <span>
                <span>
                  <CountUp start={8800} end={9000} duration={4} />
                </span>
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stats">
              <span>
                <span>
                  <CountUp start={1950} end={2000} duration={4} />
                </span>
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stats">
              <span>
                <span>
                  {" "}
                  <CountUp end={28} />
                </span>
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>

        {/* right-side */}
        <div className="hero-right flexCenter">
          <motion.div className="image-container"
          initial={{x:"7rem" , opacity: 0}}
          animate={{x:0 , opacity: 1}}
          transition={{
            duration: 2,
            type: "spring"
          }}
          >
            <img src="./geojango.jpg" alt="hero-image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
