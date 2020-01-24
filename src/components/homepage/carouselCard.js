import React, { Component } from 'react';
import { Card, Button, Carousel } from 'react-bootstrap';
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
                {this.props.description.substring(0,340)}...
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Button variant="primary" onClick={() => {history.push(`/video-player/${this.props.videoId}`); this.props.loadVideoInfo(this.props.snippet); this.props.changePlayerUrl(`https://www.youtube.com/watch?v=${this.props.videoId}`); this.props.addToPlayList(this.props.videoObject)}} >Watch Now</Button>
                {/* <Button variant="primary" onClick={() => {this.props.addToPlayList(this.props.videoObject)}} ><i class="fas fa-plus"/></Button> */}
            </Card.Footer>
        </Card>
         );
    }
}
function mapStateToProps (state){
    return state.playerReducer
}

CarouselCard = connect(mapStateToProps, actions)(CarouselCard)
 
export default CarouselCard;