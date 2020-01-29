import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../actions";
import history from '../../utils/history';

import LoginButton from '../loginButton';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

class MinnMaxNavbar extends Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this);
        this.openSearchPage = this.openSearchPage.bind(this);
    }
    state ={
        searchTerm: ""
    }

    handleChange(event) {
        this.setState ({
            [event.target.name]: event.target.value
        });
    }

    openSearchPage(){
        this.props.setSearchTerm(this.state.searchTerm);
        console.log("opening search page", this.state.searchTerm)
        var one = this.state.searchTerm.split(" ")
        var two = one.join("+")
        history.push(`/search/${two}`)
    }

    render () {
        return ( 
            <Navbar className="navbar" expand="lg">
            <Navbar.Brand className="navbar__brand-image" href="#home"><img src="https://shop.spreadshirt.com/100711602/shopData/images/logo/Logo-ShirtBanner_pgaqdt.jpg" alt="brand log goes here"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" >
                <Nav.Link onClick={() =>{history.push('/')}}>Home</Nav.Link>
                <Nav.Link onClick={() =>{history.push('/patreon')}}>Patreon</Nav.Link>
                <Nav.Link onClick={() =>{history.push('/schedule')}}>Schedule</Nav.Link>
                {/* <Nav.Link href="#link">Link</Nav.Link> */}
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                <LoginButton/>
                <Form inline>
                <FormControl name="searchTerm" type="text" placeholder="Search" className="mr-sm-2" value={this.state.searchTerm} onChange={this.handleChange} />
                <button variant="outline-success" onClick={this.openSearchPage}>Search</button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
            );
    }
}
function mapStateToProps(state){
    return state;
}

MinnMaxNavbar = connect(mapStateToProps, actions)(MinnMaxNavbar)
 
export default MinnMaxNavbar;