import React, { Component } from 'react'
import PropTypes from "prop-types";
import CarouselComp from "./common/CarouselComp";
import Teaser from "./common/Teaser";
import data from "../data";

export default class Home extends Component {
  render() {
    return (
      <div>
        
        <div className="row">
          <div className="col-sm-8">
            <CarouselComp />
          </div>
          <div className="col-sm-4">
            <p className="sectionHeading">SHOP BY </p>
            {data.teaserJson.map(({ imgPath, altText, id }) => (
              <Teaser
                category={id}
                key={id}
                imgPath={imgPath}
                altText={altText}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};
Home.prototypes = {
  homeData: PropTypes.array.isRequired
};
