import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import FeaturedContentCarousel from './featuredContentCarousel';
import axios from 'axios';
import WelcomeVideo from './welcomeVideo';
import VideoCarousel from './videoCarousel';

class Homepage extends Component {
    constructor(){
        super()
        this.getContent = this.getContent.bind(this);
        this.getFeaturedContent = this.getFeaturedContent.bind(this);
    }
    state = { 
        vc1: []
     }

    componentWillMount () {
        this.getContent();
    }

    getFeaturedContent(){
        axios
            .get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUiUhKqsBH-Is2VeC2sykEfg&maxResults=20&key=${process.env.REACT_APP_YT_API_KEY}`)
                .then(response => {
                    this.props.getFeaturedContent(response.data.items);

                })
                    .catch(error => {
                        console.log("getFeaturedContent error", error);
                    });
    }


    getContent () {
        this.getFeaturedContent();
    }

    render() { 
        return ( 
            <div className="homepage" style={{color:"black"}}>
                <FeaturedContentCarousel/>
                <WelcomeVideo/>
                <VideoCarousel playlistId={"PL6FR1Lkt9IiPuk2Xvs6Z2psbgAHnLM4Ux"} title={"The MinnMax Show"} cut ={' - The MinnMax Show'}/>
                <VideoCarousel playlistId={"PL6FR1Lkt9IiPAslT8rkVSprRXRL2A43Xn"} title={"The Great GOTY Hunt"} cut ={' - The Great GOTY Hunt'}/>
                <VideoCarousel playlistId={"PL6FR1Lkt9IiP-N-OpNygquI4U_QG0efQk"} title={"The Deepest Dive"} cut ={' - The Deepest Dive'}/>
            </div>
         );
    }
}
function mapStateToProps (state) {
    return state.mainReducer
}

Homepage = connect(mapStateToProps, actions)(Homepage)
 
export default Homepage;