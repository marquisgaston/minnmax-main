import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import MiniCard from './miniCard';
import windowSize from 'react-window-size';

class VideoCarousel extends Component {
    state = { 
        videoObjMain: [],
        videoObjTablet: [],
        videoObjMobile: []
     }

    getContent (){

    }

    componentDidMount(){
        axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${this.props.playlistId}&maxResults=20&key=${process.env.REACT_APP_YT_API_KEY}`)
        .then( res => {
            var split = res.data.items
            var pages4 = Math.round(split.length/4)
            var pages3 = Math.round(split.length/3)
            var pages1 = Math.round(split.length/1)
            var spliced4 = []
            var spliced3 = []
            var spliced1 = []
            var one = 0
            var two = 4
            while (pages4 > 0) {
                var newArray = split.slice(one,two)
                spliced4.push(newArray)
                pages4 -= 1
                one += 4
                two += 4
            }
            var three = 0
            var four = 3
            while (pages3 > 0) {
                var newArray2 = split.slice(three,four)
                spliced3.push(newArray2)
                pages3 -= 1
                three += 3
                four += 3
            }
            var five = 0
            var six = 1
            while (pages1 > 0) {
                var newArray3 = split.slice(five,six)
                spliced1.push(newArray3)
                pages1 -= 1
                five += 1
                six += 1
            }
            this.setState({
                videoObjMain: spliced4,
                videoObjTablet: spliced3,
                videoObjMobile: spliced1
            })
            


            // var splitFour = res.data.items
            
            // var splitOne = res.data.items
            // var splicedOne = []
            // var splicedThree = []
            // var splicedFour = []
            
            // while (splitFour.length > 0) {
            //     var newArray = splitFour.slice(0,4)
            //     splicedFour.push(newArray)
            // }
            // while (splitThree > 0){
            //     var newArray2 = splitThree.slice(0,3)
            //     splicedThree.push(newArray2)
            // }
            // while (splitOne > 0) {
            //     var newArray3 = splitOne.slice(0,1)
            //     splicedOne.push(newArray3)
            // }
            // this.setState({
            //     videoObjMain: splicedFour,
            //     videoObjTablet: splicedThree,
            //     videoObjMobile: splicedOne
            // })

        })
            .catch(error => {
                console.log("error", error)
            })
    }
    render() { 
        
        const renderContent =() => {
            if (this.props.windowWidth > 1024 ){
                return this.state.videoObjMain.map(page => {
                    return (
                        <Carousel.Item>
                            <div className="item-wrapper">
                                {page.map(item => {
                                    return (
                                        <MiniCard item={item} cut={this.props.cut}/>
                                    )
                                })}
                            </div>
                        </Carousel.Item>
                    )
                })
            } else 
            if (this.props.windowWidth > 412 ){
                return this.state.videoObjTablet.map(page => {
                    return (
                        <Carousel.Item>
                            <div className="item-wrapper">
                                {page.map(item => {
                                    return (
                                        <MiniCard item={item} cut={this.props.cut}/>
                                    )
                                })}
                            </div>
                        </Carousel.Item>
                    )
                })
            } else 
            if (this.props.windowWidth <= 411 ){
                return this.state.videoObjMobile.map(page => {
                    return (
                        <Carousel.Item>
                            <div className="item-wrapper">
                                {page.map(item => {
                                    return (
                                        <MiniCard item={item} cut={this.props.cut}/>
                                    )
                                })}
                            </div>
                        </Carousel.Item>
                    )
                })
            }
        }

        return ( 
            <div className="video-carousel">
                <div className="carousel-title">
                    <h2>{this.props.title}</h2>
                </div>
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

VideoCarousel = connect(mapStateToProps, actions)(VideoCarousel)
 
export default windowSize(VideoCarousel);