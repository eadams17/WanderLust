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

    return(
      <li>
        <div className="comments">
          <text className="comment-text">{this.props.comment.username}:{this.props.comment.body}</text>
          {this.props.props.currentUser.id === this.props.comment.user_id ?
          <button className='delete-button' onClick={this.handleDelete.bind(this)}>Delete</button> : ""}
        </div>
      </li>
    );
  }
}

export default withRouter(CommentItem);
