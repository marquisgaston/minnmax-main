import React, { Component } from 'react';
import InputSlider from './slider';


class Patreon extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="patreon-page-wrapper" style={{marginTop: "1.5em", marginBottom: "1em", maxWidth: "95vw"}}>
                <h3>How Does Patronage Work?</h3>
                <div>
                    <InputSlider/>
                </div>
            </div>
         );
    }
}
 
export default Patreon;