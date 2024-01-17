import React from "react";
import "./Properties.css";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import useProperties from "../../hooks/useProperties.jsx";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard.jsx";

const Properties = () => {
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
    <div className="wrapper">
      <div className="flexColCenter paddings innerwidth properties-container">
        <SearchBar />

        <div className="paddings flexCenter properties">
          {
            data.map((card, i)=> (<PropertyCard card={card} key={i}/>))
          }
        </div>
      </div>
    </div>
  );
};

export default Properties;
