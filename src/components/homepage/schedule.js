import React, { Component } from 'react';
import axios from 'axios';

class Schedule extends Component {
    constructor() {
        super()

        this.getFAQThumbnails = this.getFAQThumbnails.bind(this);
        this.getGotyThumbnails = this.getGotyThumbnails.bind(this);  
        this.getDiveThumbnails = this.getDiveThumbnails.bind(this);
        this.getShowThumbnails = this.getShowThumbnails.bind(this);
    }
    state = { 
        list1: [],
        list2: [],
        list3: [],
        list4: []
     }

    getFAQThumbnails (playlistId) {
        const thumbnailList = []
        axios
            .get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL6FR1Lkt9IiOm6jOHyCXBgzClUXizfyE6&maxResults=20&key=${process.env.REACT_APP_YT_API_KEY}`)
                .then(res => {
                    res.data.items.map(item => {
                        if (item.snippet.thumbnails.medium){
                            thumbnailList.push(item.snippet.thumbnails.medium.url)
                        }
                        return res
                    })
                    this.setState({
                        list1: thumbnailList
                    })         
                    return           
                })
    }

    getGotyThumbnails () {
        const thumbnailList2 = []
        axios
            .get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL6FR1Lkt9IiPAslT8rkVSprRXRL2A43Xn&maxResults=20&key=${process.env.REACT_APP_YT_API_KEY}`)
                .then(res => {
                    res.data.items.map(item => {
                        if (item.snippet.thumbnails.medium){
                            thumbnailList2.push(item.snippet.thumbnails.medium.url)
                        }
                        return res
                    })
                    this.setState({
                        list2: thumbnailList2
                    })                    
                })
    }

    getDiveThumbnails () {
        const thumbnailList3 = []
        axios
            .get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL6FR1Lkt9IiP-N-OpNygquI4U_QG0efQk&maxResults=20&key=${process.env.REACT_APP_YT_API_KEY}`)
                .then(res => {
                    res.data.items.map(item => {
                        if (item.snippet.thumbnails.medium){
                            thumbnailList3.push(item.snippet.thumbnails.medium.url)
                        }
                        return res
                    })
                    this.setState({
                        list3: thumbnailList3
                    })                    
                })
    }

    getShowThumbnails () {
        const thumbnailList4 = []
        axios
            .get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL6FR1Lkt9IiPuk2Xvs6Z2psbgAHnLM4Ux&maxResults=20&key=${process.env.REACT_APP_YT_API_KEY}`)
                .then(res => {
                    res.data.items.map(item => {
                        if (item.snippet.thumbnails.medium){
                            thumbnailList4.push(item.snippet.thumbnails.medium.url)
                        }
                        return res
                    })
                    this.setState({
                        list4: thumbnailList4
                    })                    
                })
    }

    componentDidMount() {
        this.getFAQThumbnails();
        this.getGotyThumbnails();
        this.getDiveThumbnails();
        this.getShowThumbnails();
        
    }

    render() { 

        const renderContent = () => {
            const cards = [
                {
                    day: "Monday",
                    title: "MinnFAQs",
                    description: "Every Monday at noon Central, Ben Hanson and the occasional guest streams a community Q&A for $20 Patreon supporters. The audio goes in the exclusive audio feed the next day.",
                    imageUrl: this.state.list1[Math.floor(Math.random() * this.state.list1.length)]

                },
                {
                    day: "Tuesday",
                    title: "The Great GOTY Hunt",
                    description: "Every Tuesday we get a group together to stream one of the biggest new games and determine whether the game is a potential game of the year contender. Our $10 supporters on Patreon choose the game every week via a poll.",
                    imageUrl: this.state.list2[Math.floor(Math.random() * this.state.list2.length)]

                },
                {
                    day: "Monthly/Wensday",
                    title: "The Deepest Dive",
                    description: "We choose a game (new or old) and talk about it in a series of in-depth game club discussions alongside the MinnMax community.",
                    imageUrl: this.state.list3[Math.floor(Math.random() * this.state.list3.length)]
                },
                {
                    day: "Thursday",
                    title: "The Minnmax Show",
                    description: "Our weekly gaming podcast covers the week's biggest conversations from the game industry, new impressions of what we're playing, and community feedback/questions. Click here to subscribe to the podcast on iTunes.",
                    imageUrl: this.state.list4[Math.floor(Math.random() * this.state.list4.length)]
                },
            ]

            return cards.map(card => {
                return (
                    <div class="card">  
                        <img src={card.imageUrl} alt="..."/>
                        <div class="card-body">
                            <h4>{card.day}</h4>
                            <h3>{card.title}</h3>
                            <p style={{fontSize: ".7em"}} class="card-text">{card.description}</p>
                        </div>
                    </div>
                )
            })
        }
        
        return ( 
            <div className="schedule-wrapper" style={{display: 'grid', justifyContent: "space-around", width: "80vw", gridGap: "1em"}}>
                {renderContent()}
            </div>
         );
    }
}
 
export default Schedule;