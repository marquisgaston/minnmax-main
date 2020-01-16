import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='footer-wrapper'>
                <div className='footer'>
                    <div className='copyright'>
                        <h4>Copyright © 2020 MinnMax Media LLC</h4>
                        <h4 className='all-rights'> All Rights Reserved.</h4>
                    </div>
                    <div className='signature'>
                        <h4>Powered by Marquis Gaston Website Builder</h4>
                    </div>
                </div>
                <div className='follow-us'>                    
                    <h3>Follow Us Here</h3>

                    <div>Subscribe to <a href='https://podcasts.apple.com/us/podcast/the-minnmax-show/id1484599827' target='_blank' rel="noopener noreferrer">The MinnMax Show</a> on iTunes</div>
                    <div>Check out our <a href="https://www.youtube.com/minnmaxshow" target='_blank' rel="noopener noreferrer">YouTube channel</a></div>
                    <div>Follow us on <a href='https://twitter.com/minnmaxgames' target='_blank' rel="noopener noreferrer">Twitter</a></div>
                    <div>Watch us on <a href='https://www.twitch.tv/minnmaxgames/' target='_blank' rel="noopener noreferrer">Twitch</a></div>
                </div>
                <div className='patreon-info'>
                    <a href='https://www.patreon.com/minnmax'><h2>Support us on Patreon!!!</h2></a>
                </div>
            </div>
         );
    }
}
 
export default Footer;