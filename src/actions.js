import {
  FETCH_POSTS_FAILURE,
  STORE_POSTS,
  LIKE_ITEM,
  BOOKMARK_ITEM,
  DISLIKE_ITEM,
  NAVIGATE_TO_DETAIL,
  NAVIGATE_TO_LIST
} from './reducer';
import { get, put } from './api';

function fetchPostsFailure(err) {
  return {
    type: FETCH_POSTS_FAILURE,
    error: err
  };
}

function likePost(id) {
  return {
    type: LIKE_ITEM,
    id
  };
}

function dislikePost(id) {
  return {
    type: DISLIKE_ITEM,
    id
  };
}

function bookmarkPost(id) {
  return {
    type: BOOKMARK_ITEM,
    id
  };
}

function storePosts(data) {
  return {
    type: STORE_POSTS,
    data
  };
}

export function navigateToList() {
  return {
    type: NAVIGATE_TO_LIST
  };
}

export function navigateToDetail(id) {
  return {
    type: NAVIGATE_TO_DETAIL,
    id
  };
}

export function fetchPosts() {
  return dispatch => {
    get('/posts')
      .then(res => {
        if (res[0]) dispatch(storePosts(res));
      })
      .catch(err => dispatch(fetchPostsFailure(err)));
  };
}

export function bookmark(data) {
  return dispatch => {
    dispatch(bookmarkPost(data.id));
    put(`/posts/${data.id}`, { ...data, bookmarked: !data.bookmarked }).catch(
      err => {
        alert(err);
      }
    );
  };
}

export function like(data) {
  return dispatch => {
    dispatch(likePost(data.id));
    put(`/posts/${data.id}`, { ...data, liked: true }).catch(err => {
      alert(err);
    });
  };
}

export function dislike(data) {
  return dispatch => {
    dispatch(dislikePost(data.id));
    put(`/posts/${data.id}`, { ...data, disliked: true }).catch(err => {
      alert(err);
    });
  };
}
