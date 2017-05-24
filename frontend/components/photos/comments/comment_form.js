import React from 'react';
import CommentItem from './comment_item';

class CommentForm extends React.Component {
  constructor(props) {
    console.log(props);
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


  render() {
    const comments = this.props.comments.filter(
      comment => comment.photo_id === this.props.photoId);

    const photoComments = comments.map(comment => (
      <CommentItem key={comment.id} comment={comment} props={this.props} />
    ));

    return(
      <div>
        <div className= "comment-list">
          { photoComments }
        </div>
        <form className="comment-form" onSubmit={ this.handleSubmit }>
          <textarea
            type='text'
            className='comment-body'
            value={this.state.body}
            placeholder='Add a comment.'
            onChange={this.update('body')}/>
          <button className="add-comment-button">Add</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
