import React, { Component } from 'react';

import Voting from './Voting.jsx';
import Time from './Time.jsx';

export default class ReplyItem extends Component {
    render() {

        const { name, comment, date, like, replyTo } = this.props;

        return (
            <div className="comment-item">
            <div className="comment-header">
              <span className="comment-author">
                <a href="#"><img alt={name}
                       src="http://i.playground.ru/i/00/00/00/00/user/default/icon.20x20.png"
                       className="avatar-image size20" />
                   {name}
                </a>
              </span>
              <Time date={date} />
            </div>
            <div className="comment-body">
              <span className="reply-target">@{replyTo}</span> {comment}
            </div>
            <div className="comment-actions">
              <Voting like={like} />
              <button className="btn btn-xs btn-reply">reply</button>
            </div>
          </div>
        );
    }
}