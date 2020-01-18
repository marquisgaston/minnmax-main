import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import history from '../../utils/history';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class MiniCard extends Component {
    state = {  }
    render() { 
        return ( 
            <Card style={{ width: '18rem' }} onClick={() => {history.push(`/video-player/${this.props.item.snippet.resourceId.videoId}`); this.props.loadVideoInfo(this.props.item.snippet); this.props.changePlayerUrl(`https://www.youtube.com/watch?v=${this.props.item.snippet.resourceId.videoId}`)}}>
                <Card.Img variant="top" src={this.props.item.snippet.thumbnails.medium.url} />
                <Card.Body>
                    <Card.Title>{this.props.item.snippet.title.split(this.props.cut)}</Card.Title>
                </Card.Body>
            </Card>
         );
    }
}

MiniCard = connect(null, actions)(MiniCard)
 
export default MiniCard;