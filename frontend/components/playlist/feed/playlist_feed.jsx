import React, { PropTypes } from 'react'
import PlaylistSmall from 'PlaylistSmall'
import Infinite from 'react-infinite'

class PlaylistFeed extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount () {
    this.props.fetchPlaylists()
    $(window).scrollTop(0);
  }




  render () {
    let grid = []
      for (var i = 1, j = i + 1; i < this.props.playlists.length; i+= 2, j += 2) {
        if (this.props.playlists[j] === undefined) {

          grid.push(
            <div className="row step" key={`${i + j} row step`}>
            <PlaylistSmall key={this.props.playlists[i].id} playlist={this.props.playlists[i]} searchTags={this.props.searchTags} givePlayBarPlaylist={this.props.givePlayBarPlaylist}/>
            </div>
          )
        } else {
          grid.push(
            <div className="row step" key={`${i + j} row step`}>
            <PlaylistSmall key={this.props.playlists[i].id} playlist={this.props.playlists[i]} searchTags={this.props.searchTags} givePlayBarPlaylist={this.props.givePlayBarPlaylist}/>
            <PlaylistSmall key={this.props.playlists[j].id} playlist={this.props.playlists[j]} searchTags={this.props.searchTags} givePlayBarPlaylist={this.props.givePlayBarPlaylist}/>
            </div>
          );
        }
    }

    if (this.props.playlists[1] === undefined) {
      return (<div className="loader"></div>)

    } else {

    return (
      <div className="container" id="feed-container">
        <Infinite containerHeight={375} elementHeight={275} useWindowAsScrollContainer>
          {
            grid
          }
        </Infinite>
      </div>
    );
    }
  }
}

export default PlaylistFeed;

// 
// var ListItem = React.createClass({
//     render: function() {
//         return <div className="infinite-list-item">
//         List Item {this.props.num}
//         </div>;
//     }
// });
//
// var InfiniteList = React.createClass({
//     getInitialState: function() {
//         return {
//             elements: this.buildElements(0, 20),
//             isInfiniteLoading: false
//         }
//     },
//
//     buildElements: function(start, end) {
//         var elements = [];
//         for (var i = start; i < end; i++) {
//             elements.push(<ListItem key={i} num={i}/>)
//         }
//         return elements;
//     },
//
//     handleInfiniteLoad: function() {
//         var that = this;
//         this.setState({
//             isInfiniteLoading: true
//         });
//         setTimeout(function() {
//             var elemLength = that.state.elements.length,
//                 newElements = that.buildElements(elemLength, elemLength + 1000);
//             that.setState({
//                 isInfiniteLoading: false,
//                 elements: that.state.elements.concat(newElements)
//             });
//         }, 2500);
//     },
//
//     elementInfiniteLoad: function() {
//         return <div className="infinite-list-item">
//             Loading...
//         </div>;
//     },
//
//     render: function() {
//         return <Infinite elementHeight={40}
//                          containerHeight={250}
//                          infiniteLoadBeginEdgeOffset={200}
//                          onInfiniteLoad={this.handleInfiniteLoad}
//                          loadingSpinnerDelegate={this.elementInfiniteLoad()}
//                          isInfiniteLoading={this.state.isInfiniteLoading}
//                          >
//             {this.state.elements}
//         </Infinite>;
//     }
// });
//
// ReactDOM.render(<InfiniteList/>, document.getElementById('react-example-one'));
