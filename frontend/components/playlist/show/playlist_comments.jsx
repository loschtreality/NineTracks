import React, { PropTypes } from 'react'

class PlaylistComments extends React.Component {
  render () {


  // if (this.props.comments === undefined) {
  //   return (
  //     <div className="loader">Loading...</div>
  //   )
  // } else {
    return (
      <div id="comments" className="card">
        <h6 id="comments_header">2 COMMENTS</h6>
        <hr className="divide"/>

      <form id="new_comment_form" className="new_review">
        <div className="user_comment clearfix">
          <span>Add Comment Below: </span>
          <textarea className="new_review new_comment"/>
        </div>
      </form>

        <div id="reviews">
          <div className="comment_thread">
              {
                this.props.comments.map((comment) => {
                  return (
                    <div className="user_review clear">
                    <span>{comment.user_name}</span>
                    <div className="review_comment">
                      <div className="review_comment_body">
                        <p>
                          {comment.body}
                        </p>
                      </div>
                    </div>
                  </div>
                  )
                })
              }
          </div>
        </div>
      </div>
    );
  // }
  }
}

export default PlaylistComments;
