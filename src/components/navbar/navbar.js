import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../actions";
import history from '../../utils/history';
import axios from 'axios';

import LoginButton from '../loginButton';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class MinnMaxNavbar extends Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this);
        this.doSearch = this.doSearch.bind(this);
        this.newPage = this.newPage.bind(this);
        this.filterResponse = this.filterResponse.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    state ={
        searchContent: "",
        searchItemsToBeMapped: [],
        searchResults: []
    }

    handleSearch(){
        if (this.state.searchContent !== undefined || "") {
            this.doSearch(this.state.searchContent);
        }
    }

    handleChange(event) {
        this.setState ({
            [event.target.name]: event.target.value
        });
    }

    filterResponse(searchTerm) {
        this.setState({ searchResults: []})
        var brokenDownSearchTerm = searchTerm.split(" ")
        console.log("BDST", brokenDownSearchTerm.filter( term =>
            this.state.searchItemsToBeMapped.map((item) => {
                if (item.snippet.title.includes(term)) {
                    this.setState({
                        searchResults: this.state.searchResults.concat(item)
                    })
                } return null  
                
            })
        )) 
        console.log("state", this.state.searchResults)
    }

    newPage(nextPageToken, searchTerm) {
        axios
            .get(`https://www.googleapis.com/youtube/v3/playlistItems?pageToken=${nextPageToken}&part=snippet&playlistId=UUiUhKqsBH-Is2VeC2sykEfg&maxResults=50&key=${process.env.REACT_APP_YT_API_KEY}`)
                    .then(res2 =>{
                        this.setState({
                            searchItemsToBeMapped: this.state.searchItemsToBeMapped.concat(res2.data.items)
                        })
                        this.filterResponse(searchTerm);
                    })
                        .catch(error => {
                            console.log("search bar error", error)
                        })
                        
    }

    doSearch(searchTerm) {
        this.setState({searchItemsToBeMapped: []})
        axios
            .get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUiUhKqsBH-Is2VeC2sykEfg&maxResults=50&key=${process.env.REACT_APP_YT_API_KEY}`)
                .then(res => {
                    this.setState({ searchItemsToBeMapped: this.state.searchItemsToBeMapped.concat(res.data.items)})
                    this.newPage(res.data.nextPageToken,searchTerm)         
                })
                    .catch(error => {
                        console.log("search bar error", error)
                    })

    }

    render () {
    return ( 
        <Navbar className="navbar" expand="lg">
        <Navbar.Brand className="navbar__brand-image" href="#home"><img src="https://shop.spreadshirt.com/100711602/shopData/images/logo/Logo-ShirtBanner_pgaqdt.jpg" alt="brand log goes here"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" >
            <Nav.Link onClick={() =>{history.push('/')}}>Home</Nav.Link>
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
            <FormControl name="searchContent" type="text" placeholder="Search" className="mr-sm-2" value={this.state.searchContent} onChange={this.handleChange} />
            <Button variant="outline-success" onClick={this.handleSearch}>Search</Button>
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