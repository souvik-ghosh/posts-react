import React from 'react';
import './PostDetail.css';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import BackIcon from '@material-ui/icons/ArrowBack';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

function PostDetail({
  item = {},
  onLike,
  onDislike,
  onBookmark,
  onBackBtnClick
}) {
  return (
    <div className="container">
      <div className="side-menu">
        <div className="back-btn-container">
          <IconButton
            className="button"
            aria-label="Back"
            onClick={onBackBtnClick}
          >
            <BackIcon />
          </IconButton>
        </div>
        <div className="buttons-container">
          <IconButton className="button" aria-label="Like" onClick={onLike}>
            <ThumbUpIcon color={item.liked ? 'primary' : 'inherit'} />
          </IconButton>
          <IconButton
            className="button"
            aria-label="Bookbark"
            onClick={onBookmark}
          >
            <FavoriteIcon color={item.bookmarked ? 'secondary' : 'inherit'} />
          </IconButton>
          <IconButton
            className="button"
            aria-label="Dislike"
            onClick={onDislike}
          >
            <ThumbDownIcon color={item.disliked ? 'primary' : 'inherit'} />
          </IconButton>
        </div>
      </div>
      <div className="content-wrapper">
        <div
          className="post-cover"
          style={{
            backgroundImage: `url(${item.image})`
          }}
        >
          header
        </div>
        <div className="article-container">
          <div className="title">{item.title || 'title'}</div>
          <div className="article">{item.article || 'article'}</div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
