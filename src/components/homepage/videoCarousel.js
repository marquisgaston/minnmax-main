import React, { Component } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
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
            console.log("res",res.data.items)
            var splitThree = res.data.items
            var splitFour = res.data.items
            
            var splitOne = res.data.items
            var splicedOne = []
            var splicedThree = []
            var splicedFour = []
            
            console.log("split&", splitFour, splitThree )
            while (splitFour.length > 0) {
                var newArray = splitFour.splice(0,4)
                splicedFour.push(newArray)
            }
            while (splitThree > 0){
                var newArray2 = splitThree.splice(0,3)
                splicedThree.push(newArray2)
            }
            while (splitOne > 0) {
                var newArray3 = splitOne.splice(0,1)
                splicedOne.push(newArray3)
            }
            this.setState({
                videoObjMain: splicedFour,
                videoObjTablet: splicedThree,
                videoObjMobile: splicedOne
            })

        })
            .catch(error => {
                console.log("error", error)
            })
            console.log("four", this.state.videoObjMain, "three", this.state.videoObjTablet, "one", this.state.videoObjMobile)
    }
    render() { 
        
        const renderContent =() => {
            // if (this.props.windowWidth < 412){
            //     // return this.state.videoObjMobile.map(page => {
            //     //     return (
            //     //         <CarouselItem>
            //     //             <div className="item-wrapper">
            //     //                 {page.map(item => {
            //     //                     return (
            //     //                         <MiniCard item={item} cut={this.props.cut}/>
            //     //                     )
            //     //                 })}
            //     //             </div>
            //     //         </CarouselItem>
            //     //     )
            //     // })
            // } 
            // else 
            // if (this.props.windowWidth < 770){
            //     // return this.state.videoObjTablet.map(page => {
            //     //     return (
            //     //         <CarouselItem>
            //     //             <div className="item-wrapper">
            //     //                 {page.map(item => {
            //     //                     return (
            //     //                         <MiniCard item={item} cut={this.props.cut}/>
            //     //                     )
            //     //                 })}
            //     //             </div>
            //     //         </CarouselItem>
            //     //     )
            //     // })
            // } else
            //  {
                return this.state.videoObjMain.map(page => {
                    return (
                        <CarouselItem>
                            <div className="item-wrapper">
                                {page.map(item => {
                                    return (
                                        <MiniCard item={item} cut={this.props.cut}/>
                                    )
                                })}
                            </div>
                        </CarouselItem>
                    )
                })
            }

        // }

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