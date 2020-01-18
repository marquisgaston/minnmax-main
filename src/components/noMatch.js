import React, { Component } from 'react';

class NoMatch extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="no-match-wrapper" style={{color: "black", minHeight: "40vw",display: "flex", alignItems: "center"}}>
                <h1>THAT PAGE COULD NOT BE FOUND</h1>
            </div>
         );
    }
}
 
export default NoMatch;