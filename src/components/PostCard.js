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
    <Card
      style={{
        display: 'flex',
        flexDirection: 'row',
        maxHeight: 250,
        padding: 10,
        marginTop: 10,
        marginBottom: 10
      }}
    >
      <CardMedia style={{ flex: 1 }} image={item.image || ''} />
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          paddingLeft: 15
        }}
      >
        <div
          style={{
            fontSize: 18,
            maxHeight: '20%',
            overflow: 'hidden'
          }}
        >
          <button className="text-button" onClick={onTitleClick}>
            {item.title}
          </button>
        </div>
        <div
          style={{
            marginTop: 10,
            fontWeight: 'lighter',
            height: 162,
            overflow: 'auto'
          }}
        >
          {item.description}
        </div>
        <div
          style={{
            marginTop: 'auto',
            marginLeft: 'auto',
            paddingTop: 10
          }}
        >
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
