import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchPosts} from '../actions';
import _ from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class PostsIndex extends React.Component{
  constructor(){
    super();
  }
  componentDidMount(){
    this.props.fetchPosts();
    console.log('en index');
    console.log(this.props.posts);
  }
  renderPosts(){
    return _.map(this.props.posts,post=>{
      if(post)return (
        <li key={post.id} className="list-group-item">
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      );
    });
  }
  render(){
    const transitionOptions={
      transitionName:"fade",
      transitionEnterTimeout:500,
      transitionLeaveTimeout:500
    };
    return(
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary margin-top" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          <ReactCSSTransitionGroup {...transitionOptions}>
            {this.renderPosts()}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {posts:state.posts};
}

export default connect(mapStateToProps,{fetchPosts})(PostsIndex);
