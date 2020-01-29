import React, { Component } from 'react';
import Schedule from './homepage/schedule';
import axios from 'axios';
import { Card } from 'react-bootstrap';

class SchedulePage extends Component {
    state = { 
        videos: []
     }

    componentDidMount() {
        this.pullContent();
    }
            
    pullContent = () => {

        axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL6FR1Lkt9IiOm6jOHyCXBgzClUXizfyE6&maxResults=20&key=${process.env.REACT_APP_YT_API_KEY}`)
            .then(res => {
               this.setState({
                   videos: res.data.items
               })
            })
        }

    renderContnet = () => {

        return this.state.videos.map(item => {

            return (
                <Card>
                    <h4>{item.snippet.title}</h4>
                    <img src={item.snippet.thumbnails.medium.url}/>
                </Card>
            )
        })
    }

    render() { 

        return ( 
            <div className="schedule-page-wrapper">
                <h3 className="main-title">MinnMax Video / Content Schedule</h3>
                <Schedule/>
                <div className="bonus-content" style={{marginTop:"2em"}}>
                    <h2>Bonus Content and Misc.</h2>
                    <div style={{fontSize: ".75em"}}>We'll be posting bonus content on our YouTube channel and exclusive audio feed for $5 Patreon supporters periodically and will be adding more regular content in the future. Stay tuned!</div>
                </div>
                <div className="bonus-content-cards" style={{marginTop: "2em", display: "grid "}}>
                  {this.renderContnet()}
                </div>
            </div>
         );
    }
}
 
export default SchedulePage;