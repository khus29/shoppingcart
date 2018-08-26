import React from 'react';

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Teaser = props => {
  return (
    <div className={`teaser-${props.category}`}>
      <Link to={`/${props.category}`}>
        <img src={props.imgPath} alt={props.altText} />
      </Link>
    </div>
  );
};

Teaser.prototypes = {
  imgPath: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
};
export default Teaser;
