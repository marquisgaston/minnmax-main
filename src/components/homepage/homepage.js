import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import FeaturedContentCarousel from './featuredContentCarousel';
import axios from 'axios';

class Homepage extends Component {
    constructor(){
        super()
        this.getContent = this.getContent.bind(this);
    }
    state = {  }

    componentWillMount () {
        this.getContent()
    }

    getContent () {
        axios
            .get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUiUhKqsBH-Is2VeC2sykEfg&maxResults=20&key=${process.env.REACT_APP_YT_API_KEY}`)
                .then(response => {
                    this.props.getFeaturedContent(response.data.items);
                    console.log("props", this.props.homePageVideosObjectList)

                })
                    .catch(error => {
                        console.log("getFeaturedContent error", error);
                    });
    }

    render() { 
        return ( 
            <div className="homepage" style={{color:"black"}}>
                <FeaturedContentCarousel/>
            </div>
         );
    }
}
function mapStateToProps (state) {
    return state.mainReducer
}

Homepage = connect(mapStateToProps, actions)(Homepage)
 
export default Homepage;