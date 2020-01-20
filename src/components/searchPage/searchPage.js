import React, { Component } from 'react';
import axios from 'axios';

class SearchPage extends Component {
    state = { 
        searchTerm: this.props.match.params.slug.split("+"),
        searchItemsToBeMapped: [],
        mainResults: [],
        allResults: [],
        filterMode: "all-results",
        itemsPerPage: 10  
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
                return this.state.allResults.map(item => {
                    return <h2>{item.snippet.title}</h2>
                })
            }
        }
        return ( 
            <div>
                {renderContent()}
            </div>
         );
    }
}
 
export default SearchPage;