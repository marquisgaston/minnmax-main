import React, { Component } from 'react';

class Schedule extends Component {
    state = {  }
    render() { 

        const renderContent = () => {
            const cards = [
                {
                    day: "Monday",
                    title: "MinnFAQs",
                    description: "Every Monday at noon Central, Ben Hanson and the occasional guest streams a community Q&A for $20 Patreon supporters. The audio goes in the exclusive audio feed the next day.",
                    imageUrl: "https://i.ytimg.com/vi/pyM47lhQV4U/maxresdefault.jpg"

                },
                {
                    day: "Tuesday",
                    title: "The Great GOTY Hunt",
                    description: "Every Tuesday we get a group together to stream one of the biggest new games and determine whether the game is a potential game of the year contender. Our $10 supporters on Patreon choose the game every week via a poll.",
                    imageUrl: "https://i.ytimg.com/vi/rTN2rktFjmA/mqdefault.jpg"
                },
                {
                    day: "Monthly/Wensday",
                    title: "The Deepest Dive",
                    description: "We choose a game (new or old) and talk about it in a series of in-depth game club discussions alongside the MinnMax community.",
                    imageUrl: "https://i.ytimg.com/vi/81demaNRxJg/maxresdefault.jpg"
                },
                {
                    day: "Thursday",
                    title: "The Minnmax Show",
                    description: "Our weekly gaming podcast covers the week's biggest conversations from the game industry, new impressions of what we're playing, and community feedback/questions. Click here to subscribe to the podcast on iTunes.",
                    imageUrl: "https://i.ytimg.com/vi/7fAE8zWlCrk/maxresdefault.jpg"
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