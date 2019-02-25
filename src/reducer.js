import { combineReducers } from 'redux';

export const BOOKMARK_ITEM = 'BOOKMARK_ITEM';
export const VIEW_ITEM = 'VIEW_ITEM';
export const LIKE_ITEM = 'LIKE_ITEM';
export const DISLIKE_ITEM = 'DISLIKE_ITEM';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const STORE_POSTS = 'STORE_POSTS';
export const NAVIGATE_TO_DETAIL = 'NAVIGATE_TO_DETAIL';
export const NAVIGATE_TO_LIST = 'NAVIGATE_TO_LIST';

function posts(state = [], action) {
  switch (action.type) {
    case STORE_POSTS:
      return action.data;
    case BOOKMARK_ITEM:
      return state.map(post => {
        if (post.id === action.id) {
          return Object.assign({}, post, {
            bookmarked: !post.bookmarked
          });
        }
        return post;
      });
    case LIKE_ITEM:
      return state.map(post => {
        if (post.id === action.id) {
          return Object.assign({}, post, {
            liked: !post.liked,
            disliked: false
          });
        }
        return post;
      });
    case DISLIKE_ITEM:
      return state.map(post => {
        if (post.id === action.id) {
          return Object.assign({}, post, {
            disliked: !post.disliked,
            liked: false
          });
        }
        return post;
      });
    default:
      return state;
  }
}

function isDetail(state = false, action) {
  switch (action.type) {
    case NAVIGATE_TO_DETAIL:
      return true;
    case NAVIGATE_TO_LIST:
      return false;
    default:
      return state;
  }
}

function viewPostID(state = '', action) {
  switch (action.type) {
    case NAVIGATE_TO_DETAIL:
      return action.id;
    default:
      return state;
  }
}

export default combineReducers({ posts, isDetail, viewPostID });
