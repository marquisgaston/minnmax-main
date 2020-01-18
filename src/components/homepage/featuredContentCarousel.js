import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import CarouselSlide from './carouselSlide';

class FeaturedContentCarousel extends Component {
    state = {  }
    render() {
        
        const renderContent = () => {
            return (
                this.props.homePageVideosObjectList.map(item => {
                    return (
                        <Carousel.Item key={item.id}>
                            <CarouselSlide slide={item}/>
                        </Carousel.Item>
                    )
                })
            )
        }
        return ( 
            <div className="carousel-wrapper">
            <Carousel>
                {renderContent()}
            </Carousel>
            </div>
         );
    }
}
function mapStateToProps (state) {
    return state.mainReducer
}

FeaturedContentCarousel = connect(mapStateToProps, actions)(FeaturedContentCarousel)
 
export default FeaturedContentCarousel;