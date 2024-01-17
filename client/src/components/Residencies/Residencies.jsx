import React from "react";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../PropertyCard/PropertyCard";
import { PuffLoader } from "react-spinners";
import useProperties from "../../hooks/useProperties";

const Residencies = () => {
  const { data, isError, isLoading } = useProperties();
  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          arial-label="puff-loading"
        />
      </div>
    );
  }
  return (
    <section className="r-wrapper">
      <div className="innerWidth paddings r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">The Popular Spots</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <PropertyCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        &lt;
      </button>
      <button
        onClick={() => {
          swiper.slideNext();
        }}
      >
        &gt;
      </button>
    </div>
  );
};
