import { createSelector } from 'reselect';

const getViewItemID = state => state.viewPostID;

const getPosts = state => state.posts;

const getIsDetail = state => state.isDetail;

const makeGetPosts = () =>
  createSelector(
    [getPosts],
    posts => posts
  );

const makeGetViewItem = () =>
  createSelector(
    [getViewItemID, getPosts],
    (id, posts) => posts.find(post => post.id === id)
  );

const makeGetIsDetail = () =>
  createSelector(
    [getIsDetail],
    isDetail => isDetail
  );

export { makeGetPosts, makeGetViewItem, makeGetIsDetail };
