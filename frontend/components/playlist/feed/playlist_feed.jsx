import React, { PropTypes } from 'react'
import PlaylistSmall from 'PlaylistSmall'
import Infinite from 'react-infinite'

class PlaylistFeed extends React.Component {
  constructor(props) {
    super(props)

    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this)


    $(window).scrollTop(0);
    this.state = {elements: [], isInfiniteLoading: false}
  }

  componentDidMount () {
    this.props.fetchPlaylists()
    this.setState({elements: this.buildElements(1, 20)})
  }


  buildElements(start, end) {
    let grid = []
    let dead_end = (end > this.props.playlists.length ? this.props.playlists.length : end)
      for (var i = start, j = i + 1; i < dead_end; i+= 2, j += 2) {
        if (this.props.playlists[j] === undefined) {
          grid.push(
            <div className="row step" key={`${(i + j) * dead_end} row step`}>
            <PlaylistSmall key={this.props.playlists[i].id} playlist={this.props.playlists[i]} searchTags={this.props.searchTags} givePlayBarPlaylist={this.props.givePlayBarPlaylist}/>
            </div>
          )
        } else {
          grid.push(
            <div className="row step" key={`${(i + j) * dead_end} row step`}>
            <PlaylistSmall key={this.props.playlists[i].id} playlist={this.props.playlists[i]} searchTags={this.props.searchTags} givePlayBarPlaylist={this.props.givePlayBarPlaylist}/>
            <PlaylistSmall key={this.props.playlists[j].id} playlist={this.props.playlists[j]} searchTags={this.props.searchTags} givePlayBarPlaylist={this.props.givePlayBarPlaylist}/>
            </div>
          );
        }
    }
    return grid
  }


  handleInfiniteLoad() {
      this.setState({
          isInfiniteLoading: true
      });
      setTimeout(() => {
          let elemLength = this.state.elements.length,
              newElements = this.buildElements(elemLength, elemLength + 20);
          this.setState({
              isInfiniteLoading: false,
              elements: this.state.elements.concat(newElements)
          });
      }, 2000);
  }


  elementInfiniteLoad() {
      return (<div className="loader">

      </div>)
  }





  render () {


    if (this.props.playlists[1] === undefined) {
      return (<div className="loader"></div>)

    } else {

    return (
      <div className="container" id="feed-container">
        <Infinite
        elementHeight={275}
        containerHeight={window.innerHeight}
        infiniteLoadBeginEdgeOffset={200}
        onInfiniteLoad={this.handleInfiniteLoad}
        loadingSpinnerDelegate={this.elementInfiniteLoad()}
        isInfiniteLoading={this.state.isInfiniteLoading}
        timeScrollStateLastsForAfterUserScrolls={1000}
        useWindowAsScrollContainer={true}>
          {
            this.state.elements
          }
        </Infinite>
      </div>
    );
    }
  }
}

export default PlaylistFeed;
