import React from 'react';
import CommentItem from './comment_item';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      photo_id: this.props.photoId,
      user_id: this.props.currentUser.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  componentWillMount() {
    this.props.fetchComments();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({body: ''});
  }

  update(prop) {
    return e => this.setState({[prop]: e.target.value});
  }

  renderButton() {
    if(this.state.body === "") {
      return(
        <button disabled className="add-comment-button">Add</button>
      );
    } else {
      return(
        <button className="add-comment-button">Add</button>
      );
    }
  }


  render() {
    const comments = this.props.comments.filter(
      comment => comment.photo_id === this.props.photoId);

    const photoComments = comments.map(comment => (
      <CommentItem key={comment.id} comment={comment} props={this.props} />
    ));

    return(
      <div className="comment-container">
        <ul className= "comment-list">
          { photoComments }
        </ul>
        <form className="comment-form" onSubmit={ this.handleSubmit }>
          <textarea
            rows= "4"
            cols="30"
            type='text'
            className='comment-body'
            value={this.state.body}
            placeholder='Add a comment.'
            onChange={this.update('body')}/>
          {this.renderButton()}
        </form>
      </div>
    );
  }
}

export default CommentForm;
