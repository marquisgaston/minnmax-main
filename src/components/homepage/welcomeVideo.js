import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class WelcomeVideo extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="welcome-video">
                <div>
                    <h3>INTRODUCING MINNMAX</h3>
                </div>
                {/* autoplay; */}
                <ReactPlayer url ='ttps://youtu.be/BWgSxte-cMs'/>
            
            </div>
         );
    }
}
 
export default WelcomeVideo;