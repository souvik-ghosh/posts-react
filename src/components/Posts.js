import React, { Component } from 'react';
import './Posts.css';
import { connect } from 'react-redux';
import PostDetail from './PostDetail';
import {
  like,
  dislike,
  bookmark,
  navigateToList,
  navigateToDetail,
  fetchPosts
} from '../actions';
import { makeGetIsDetail, makeGetViewItem, makeGetPosts } from '../selector';
import PostCard from './PostCard';

class Posts extends Component {
  componentDidMount() {
    const { posts, dispatch } = this.props;
    if (!posts[0]) dispatch(fetchPosts());
  }

  render() {
    const { isDetail, viewPost, posts, dispatch } = this.props;
    return (
      <div className="posts">
        {isDetail ? (
          <PostDetail
            item={viewPost}
            onLike={() => dispatch(like(viewPost))}
            onDislike={() => dispatch(dislike(viewPost))}
            onBookmark={() => dispatch(bookmark(viewPost))}
            onBackBtnClick={() => dispatch(navigateToList())}
          />
        ) : (
          <div style={{ flex: 1, paddingLeft: '10%', paddingRight: '10%' }}>
            {posts.map(post => (
              <PostCard
                key={post.id}
                item={post}
                onTitleClick={() => dispatch(navigateToDetail(post.id))}
                onLike={() => dispatch(like(post))}
                onDislike={() => dispatch(dislike(post))}
                onBookmark={() => dispatch(bookmark(post))}
                onBackBtnClick={() => dispatch(navigateToList())}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

const makeMapStateToProps = () => {
  const getIsDetail = makeGetIsDetail();
  const getViewPost = makeGetViewItem();
  const getPosts = makeGetPosts();
  const mapStateToProps = state => {
    return {
      isDetail: getIsDetail(state),
      viewPost: getViewPost(state),
      posts: getPosts(state)
    };
  };
  return mapStateToProps;
};

export default connect(makeMapStateToProps)(Posts);
