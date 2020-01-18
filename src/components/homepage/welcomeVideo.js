import React, { Component } from 'react';

class WelcomeVideo extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="welcome-video">
                <div>
                    <h3>INTRODUCING MINNMAX</h3>
                </div>
                {/* autoplay; */}
                <iframe className="welcome-iframe" title="welcome video" width="560" height="315" src="https://www.youtube.com/embed/BWgSxte-cMs?" frameBorder="0"  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            
            </div>
         );
    }
}
 
export default WelcomeVideo;