import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class PlaylistBar extends Component {
    state = {  }
    render() {
        console.log("log", this.props.playlist[0])
        const renderContent = () => {
            if (this.props.playlist !== [] || null || undefined) {
                return (
                    this.props.playlist.map(playlistObject => {
                       return (
                            <div class="card" key={playlistObject.id}>
                                <img class="card-img-top" src="{playlistObject.playlistItem.snippet.thumbnails.medium.url}" alt="Card image cap"/>
                                <button class="btn btn-primary minus-button" type="button" onClick={() => {console.log("filter",this.props.playlist) }}><i class="fas fa-minus"/></button>
                            </div>
                       )
                    })
                )
            }
        }
        return (
                <div className="playlist-bar">
                    <button class="btn btn-primary playlist-button" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <div>
                        Playlist <i class="fas fa-play"></i>
                    </div>
                    </button>
                    <div class="collapse" id="collapseExample" drag>
                        {this.props.playlist ? renderContent() : null}
                    </div>
                </div>
         );
    }
}
function mapStateToProps(state){
    return state.playerReducer
}

PlaylistBar = connect(mapStateToProps, actions)(PlaylistBar)
 
export default PlaylistBar;