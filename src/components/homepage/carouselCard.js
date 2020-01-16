import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

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
                <Button variant="primary">Go somewhere</Button>
            </Card.Footer>
        </Card>
         );
    }
}
 
export default CarouselCard;