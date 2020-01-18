import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class MiniCard extends Component {
    state = {  }
    render() { 
        return ( 
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.item.snippet.thumbnails.medium.url} />
                <Card.Body>
                    <Card.Title>{this.props.item.snippet.title.split(this.props.cut)}</Card.Title>
                </Card.Body>
            </Card>
         );
    }
}
 
export default MiniCard;