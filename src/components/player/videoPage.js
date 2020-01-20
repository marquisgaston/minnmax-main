import React, { Component } from 'react';
import SitePlayer from "./sitePlayer.";
import { connect } from 'react-redux';
import * as actions from '../../actions';
import VideoCarousel from '../homepage/videoCarousel';

import axios from 'axios';

class VideoPage extends Component {
    constructor(props) {
        super(props)
        this.loadFromLocalUrl = this.loadFromLocalUrl.bind(this)
    }
 
    state = {
        readMore: false,
        textSubString: 300,
        snippet: {},
        currentId: this.props.match.params.slug
    }

    loadFromLocalUrl(id) {
        
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${process.env.REACT_APP_YT_API_KEY}`)
            .then(res => {
                this.props.loadVideoInfo(res.data.items[0].snippet)
            })
                .catch(error => {
                    console.log("loadLocal error", error)
                })
    }

    componentDidMount () {
        var one = "https://www.youtube.com/watch?v="
        var two = one.concat(this.state.currentId)
        this.props.playerUrl === null ? this.props.changePlayerUrl(two) : console.log()
        this.loadFromLocalUrl(this.state.currentId)
    }

    render() {
        var zero = newFunction(this.props.snippet.title);
        var one = zero.TitleToBeRendered.split(" ");
        var two = one.splice(0,(Math.floor(one.length/2)))

        function newFunction (originalText) {
            const filterWords = [" - The MinnMax Show", " - The Great GOTY Hunt", " - Max Spoilers", " - Let's Take Another Look At That", " - Big News"]
            var TitleToBeRendered = originalText;
            var showTypeToBeRendered = ""
            
            filterWords.map(item => {
               if (originalText.includes(item)) {
                   var one = originalText.split(item)
                   var mainTitle = one[0]
                   var two = originalText.split(mainTitle)
                   var three = two[1].split(" - ")
                   var showType = three[1]

                   TitleToBeRendered = mainTitle
                   showTypeToBeRendered = showType
               }
               return three
           })
            return {TitleToBeRendered, showTypeToBeRendered}
        }   

        const divStyle = {display: "flex", alignItems: "center", height: "45vh"}
  
        return ( 
            <div className="video-page-wrapper">
            {this.props.playerUrl ? 
                <div className="video-panel">
                    <div className="video-player-wrapper">
                        {this.props.playerUrl ? <SitePlayer url={this.props.playerUrl} poster={this.props.snippet.thumbnails.medium.url}/> : <h1 style ={divStyle}>You Haven't Selected A Video</h1>}
                    </div>
                    <div className="info-panel">
                    <div class="card">
                    <div className="card-img-wrapper">
                        {this.props.videoIsPlaying === false ? null : <img class="card-img-top" src={this.props.snippet.thumbnails.medium.url}alt="Card cap" />}
                    </div>
                        <div class="card-body">
                            <h5 class="card-title">{zero.TitleToBeRendered}</h5>
                            <p class="card-text">{this.props.snippet.description.substring(0,400)}...</p>
                        </div>
                        <div class="card-body">
                            {zero.showTypeToBeRendered ? <div class="list-group-item">{zero.showTypeToBeRendered}</div> : null}
                        </div>
                    </div>
                    </div>
                </div> : null }
                {this.props.playerUrl ? 
                <VideoCarousel playlistId={"UUiUhKqsBH-Is2VeC2sykEfg"} title={"More from MinnMax"} cut ={''}/> : null }
            </div>
         );
    }
}
function mapStateToProps (state) {
    return state.playerReducer
}

VideoPage = connect(mapStateToProps, actions)(VideoPage)
 
export default VideoPage;