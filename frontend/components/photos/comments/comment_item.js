import React from 'react';
import { withRouter } from 'react-router';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.props.deleteComment(this.props.comment.id);
  }

  render() {
    const currentUserId = this.props.props.currentUser.id;
    const commentUserId = this.props.comment.user_id;
    const photoOwnerId = this.props.props.photoOwner;

    return(
      <li className="comment-list-item">
        <div className="comments">
          <text className="comment-text">{this.props.comment.username}: {this.props.comment.body}</text>
          {(currentUserId === commentUserId) || (currentUserId === photoOwnerId) ?
          <button className='comment-delete-button' onClick={this.handleDelete.bind(this)}>Delete</button> : ""}
        </div>
      </li>
    );
  }
}

export default withRouter(CommentItem);
