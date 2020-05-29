import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Avatar = () => {
  return (
    <img src="https://pbs.twimg.com/profile_images/935057010231459840/HNDpIIM4_400x400.jpg"
      className="avatar" alt="avatar" />
  );
}

const Message = () => {
  return (
    <div className="message">
      This is less than 280 characters
    </div>
  );
}


const Author = () => {
  return (
    <span className="author">
      <span className="name">Haris Pasha Dipto</span>
      <span className="handle">@hpdipto</span>
    </span>
  );
}

const Time = () => (
  <span className="time">3h ago</span>
);

const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
);

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button" />
);

const LikeButton = () => (
  <i className="fa fa-heart like-button" />
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

const Tweet = () => {

  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author /><Time/>
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  )
}



ReactDOM.render(<Tweet/>,
document.querySelector("#root"));