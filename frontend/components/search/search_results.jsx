import React, { PropTypes } from 'react'
import PlaylistSmall from 'PlaylistSmall'

class SearchResults extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount(){
    $(window).scrollTop(0);
  }

  render () {
    let grid = []
      for (var i = 0, j = i + 1; i < this.props.search_results.length; i+= 2, j += 2) {
        if (this.props.search_results[j] === undefined) {

          grid.push(
            <div className="row step" key={`${i + j} row step`}>
            <PlaylistSmall key={this.props.search_results[i].id} playlist={this.props.search_results[i]} searchTags={this.props.searchTags} givePlayBarPlaylist={this.props.givePlayBarPlaylist}/>
            </div>
          )
        } else {
          grid.push(
            <div className="row step" key={`${i + j} row step`}>
            <PlaylistSmall key={this.props.search_results[i].id} playlist={this.props.search_results[i]} searchTags={this.props.searchTags} givePlayBarPlaylist={this.props.givePlayBarPlaylist}/>
            <PlaylistSmall key={this.props.search_results[j].id} playlist={this.props.search_results[j]} searchTags={this.props.searchTags} givePlayBarPlaylist={this.props.givePlayBarPlaylist}/>
            </div>
          );
        }
    }

    if (!this.props.search_results) {
      return (<div className="loader"></div>)

    } else if (this.props.search_results[0] === undefined) {
      return (
        <div className="container-fluid" id="no_res_container">
          <div className="row step text-center">
            <h3 className="no_results">No results found, please search again</h3>
          </div>
        </div>
      )
    } else {

      return (
        <div className="container">
           {
            grid
           }
        </div>
      );
    }
  }
}

export default SearchResults;
