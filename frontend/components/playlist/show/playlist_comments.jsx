import React, { PropTypes } from 'react'

class PlaylistComments extends React.Component {
  render () {
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
            <div className="user_review clear">
              <span>Other User</span>
              <div className="review_comment">
                <div className="review_comment_body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistComments;
