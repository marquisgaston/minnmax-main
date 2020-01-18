import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import { connect } from 'react-redux';
import * as actions from '../../actions';
 
class SitePlayer extends Component {
    render() {
    return <ReactPlayer 
    onPlay={() => {this.props.checkIsPlaying(true);}}
    url={this.props.url} 
    pip={true} width="65vw" 
    height="36.4vw" 
    controls={true} />
    // playing={true}
    }
}
function mapStateToProps (state) {
    return state.playerReducer
}

SitePlayer = connect(mapStateToProps, actions)(SitePlayer)

export default SitePlayer;