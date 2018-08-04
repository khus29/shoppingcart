import React from 'react';
import PropTypes from 'prop-types';
import CarouselComp from './common/CarouselComp';
import Teaser from './common/Teaser';

const Home = (props) => {
    return (
        <div className="row">
            <div className="col-sm-8">
                <CarouselComp />
            </div>
            <div className="col-sm-4">
                <p>SHOP BY </p>
                {props.homeData.map(({imgPath, altText, id}) => (
                    <Teaser category={id} key={id} imgPath={imgPath} altText={altText} />
                ))}
            </div>
        </div>
    )
}
Home.prototypes = {
    homeData: PropTypes.array.isRequired
}
export default Home;