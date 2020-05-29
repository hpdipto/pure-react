import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import './index.css';


const Avatar = ({hash}) => {
  const url = `https://www.gravatar.com/avatar/${hash}`;

  return (
    <img src={url}
      className="avatar" alt="avatar" />
  );
}

const Message = ({text}) => {
  return (
    <div className="message">
      {text}
    </div>
  );
}


const Author = ({author}) => {
  const {name, handle} = author;
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

const Time = ({time}) => {
  const timeString = moment(time).fromNow();
  
  return (
    <span className="time">
      {timeString}
    </span>
  );
};

const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
);


const Count = ({count}) => {
  if (count > 0) {
    return (
      <span className="retweet-count">
        {count}
      </span>
    );
  }
  else {
    return null;
  }
}

const RetweetButton = ({count}) => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    <Count count={count} />
  </span>
);

const LikeButton = ({count}) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    <span className="like-count">
      {count ? count : null}
    </span>
  </span>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);



const Tweet = ({tweet}) => {

  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <Author author={tweet.author}/><Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  )
}


const testTweet = {
  message: "Silence gives answers. -Rumi",
  gravatar: "xyz",
  author: {
    handle: "hpdipto",
    name: "Haris Pasha Dipto"
  },
  likes: 2,
  retweets: 3,
  timestamp: "2019-08-02 21:24:37"
};


ReactDOM.render(<Tweet tweet={testTweet}/>,
document.querySelector("#root"));