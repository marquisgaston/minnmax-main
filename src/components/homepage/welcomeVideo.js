import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import windowSize from 'react-window-size';

class WelcomeVideo extends Component {
    state = {  }
    render() { 
        const renderContent = () => {
            if (this.props.windowWidth > 770) {
                return ( 
                    <div className="welcome-video">
                        <div>
                            <h3>INTRODUCING MINNMAX</h3>
                        </div>
                        {/* autoplay; */}
                        <ReactPlayer playing="true" url ='ttps://youtu.be/BWgSxte-cMs' autoplay="true"/>
                    
                    </div>
                 );
            }
        }

        return (
            <div>
                {renderContent()}
            </div>
        )
    }
}
 
export default windowSize(WelcomeVideo);