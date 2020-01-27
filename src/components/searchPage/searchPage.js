import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import history from '../../utils/history';

class SearchPage extends Component {
    state = { 
        searchTerm: this.props.match.params.slug.split("+"),
        searchItemsToBeMapped: [],
        mainResults: [],
        allResults: [],
        filterMode: "all-results",
        itemsPerPage: 10,
        pageNumber: 0
     }

    filterSearchItems() {
        const mainResult = this.state.searchItemsToBeMapped.filter(item => item.snippet.title.toLowerCase().includes(this.state.searchTerm.join(" ").toLowerCase()))
        this.setState({
            mainResult: mainResult,
            allResults: this.state.allResults.concat(mainResult)
        })
        console.log("main results", mainResult.map(item => {return item.snippet.title}), "all results", this.state.allResults)
    }

    newPage(nextPageToken) {
        axios
            .get(`https://www.googleapis.com/youtube/v3/playlistItems?pageToken=${nextPageToken}&part=snippet&playlistId=UUiUhKqsBH-Is2VeC2sykEfg&maxResults=50&key=${process.env.REACT_APP_YT_API_KEY}`)
                    .then(res2 =>{
                        this.setState({
                            searchItemsToBeMapped: this.state.searchItemsToBeMapped.concat(res2.data.items)
                        })
                        this.filterSearchItems()
                        
                    })
                        .catch(error => {
                            console.log("search bar error2", error)
                        })
                        
    }

    doSearch() {
        this.setState({searchItemsToBeMapped: []})
        axios
            .get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUiUhKqsBH-Is2VeC2sykEfg&maxResults=50&key=${process.env.REACT_APP_YT_API_KEY}`)
                .then(res => {
                    this.setState({ searchItemsToBeMapped: this.state.searchItemsToBeMapped.concat(res.data.items)})
                    this.newPage(res.data.nextPageToken)
                })
                    .catch(error => {
                        console.log("search bar error", error)
                    })

    }

    componentDidMount() {
        console.log("searchterm", this.state.searchTerm.join(" "));
        this.doSearch();

    }

    render() { 

        const renderContent = () => {
            if (this.state.filterMode === "all-results" ){
                var toDisplay = this.state.allResults.slice(this.state.pageNumber,this.state.pageNumber + this.state.itemsPerPage)
                return toDisplay.map(item => {
                    return (
                        toDisplay.length > 0 ?
                            <div className="result-item">
                            <div class="card" >
                                <img class="card-img-top" src={item.snippet.thumbnails.medium.url} alt="Card cap"/>
                                <div class="card-body">
                                 <h5 class="card-title">{item.snippet.title}</h5>
                                    <p class="card-text" style={{fontSize: ".7em"}}>{item.snippet.description.substring(0,200)}...</p>
                                    <div class="btn btn-primary" onClick={() => {history.push(`/video-player/${item.snippet.resourceId.videoId}`); this.props.loadVideoInfo(item.snippet); this.props.changePlayerUrl(`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`); this.props.addToPlayList(this.props.videoObject)}}>Watch Now</div>
                                </div>
                            </div>
                        </div> : 
                            <h2>Your Search Return No Results</h2>
                    )
                })
            }
        }
        return ( 
            <div className="search-page-wrapper" style={{marginTop: "1em", display: "flex", flexDirection: "column", alignItems: "space-between", justifyContent: "center", minWidth: "69vw"}}>
                <h2>Results for: "{this.state.searchTerm.join(" ")}"</h2>
                <div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    {this.state.pageNumber > 0 ? <button style={{color: "white", borderRadius: "5px"}} onClick={() => {this.setState({pageNumber: this.state.pageNumber - this.state.itemsPerPage})}}>Prev Page</button> : null}
                    {this.state.pageNumber/this.state.itemsPerPage + 1 < (this.state.allResults.length/this.state.itemsPerPage) ? <button style={{color: "white", borderRadius: "5px"}} onClick={() => {this.setState({pageNumber: this.state.pageNumber + this.state.itemsPerPage, })}}>Next Page</button> : null}   
                </div>
                <div className="search-results" style={{width: "65vw", marginTop: "1.2em", gridGap: "1em", display: "grid"}}>
                    {renderContent()}
                </div>
                <div style={{display: "flex", justifyContent: "space-between", marginTop: "1.5em"}}>
                    {this.state.pageNumber > 0 ? <button style={{color: "white", borderRadius: "5px"}} onClick={() => {this.setState({pageNumber: this.state.pageNumber - this.state.itemsPerPage})}}>Prev Page</button> : null}
                    {this.state.pageNumber/this.state.itemsPerPage + 1 < (this.state.allResults.length/this.state.itemsPerPage) ? <button style={{color: "white", borderRadius: "5px"}} onClick={() => {this.setState({pageNumber: this.state.pageNumber + this.state.itemsPerPage, })}}>Next Page</button> : null}   
                </div>
                </div>
            </div>
         );
    }
}
function mapStateToProps(state){
    return state
}

SearchPage = connect(mapStateToProps, actions)(SearchPage)
 
export default SearchPage;