import React, { Component } from 'react';

import CarouselCard from './carouselCard';

class Carousel extends Component {
    state = {  }
    render() { 
        const slide = this.props.slide;
        var zero = newFunction(slide.snippet.title);
        var one = zero.TitleToBeRendered.split(" ");
        var two = one.splice(0,(Math.floor(one.length/2)))

        function newFunction (originalText) {
            const filterWords = [" - The MinnMax Show", " - The Great GOTY Hunt", " - Max Spoilers", " - Let's Take Another Look At That", " - Big News", " - Max News"]
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
        return ( 
            <div className ="card-img-wrapper">
            <img src={this.props.slide.snippet.thumbnails.maxres ? this.props.slide.snippet.thumbnails.maxres.url : this.props.slide.snippet.thumbnails.medium.url } alt="empty"/>
            <CarouselCard title={one.length + two.length < 5 ? 
                        <div className="carousel-title">
                            {zero.TitleToBeRendered} 
                        </div>
                        :
                        <div>
                                <div>
                                    {two.map( two => { return (two + " ")})}
                                </div>
                                <div>
                                    {one.map ( one => { return (one + " ")})}
                                </div>
                        </div>} 
                        description={`${this.props.slide.snippet.description.substring(0,590)}...`}
                        showType={zero.showTypeToBeRendered !== "" ? zero.showTypeToBeRendered : null}/>
        </div>
         );
    }
}
 
export default Carousel;