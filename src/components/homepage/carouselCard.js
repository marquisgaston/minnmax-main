import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import history from '../../utils/history';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class CarouselCard extends Component {
    state = {  }
    render() { 
        return ( 
        <Card className="text-center">
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Body>
                <Card.Title>{this.props.showType}</Card.Title>
                <Card.Text>
                {this.props.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Button variant="primary" onClick={() => {history.push(`/video-player/${this.props.videoId}`); this.props.loadVideoInfo(this.props.snippet); this.props.changePlayerUrl(`https://www.youtube.com/watch?v=${this.props.videoId}`)}} >Go somewhere</Button>
            </Card.Footer>
        </Card>
         );
    }
}

CarouselCard = connect(null, actions)(CarouselCard)
 
export default CarouselCard;