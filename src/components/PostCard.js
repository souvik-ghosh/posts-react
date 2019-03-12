import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import './PostCard.css';

function PostCard({ item, onTitleClick, onLike, onDislike, onBookmark }) {
  return (
    <Card className="card-container">
      <CardMedia className="card-media" image={item.image || ''} />
      <div className="content">
        <div className="title-container">
          <button className="text-button" onClick={onTitleClick}>
            {item.title}
          </button>
        </div>
        <div className="description">{item.description}</div>
        <div className="button-group">
          <IconButton aria-label="Dislike" onClick={onDislike}>
            <ThumbDownIcon color={item.disliked ? 'primary' : 'inherit'} />
          </IconButton>
          <IconButton aria-label="Bookbark" onClick={onBookmark}>
            <FavoriteIcon color={item.bookmarked ? 'secondary' : 'inherit'} />
          </IconButton>
          <IconButton aria-label="Like" onClick={onLike}>
            <ThumbUpIcon color={item.liked ? 'primary' : 'inherit'} />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}

export default PostCard;
