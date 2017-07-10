import React, { Component } from 'react';

import Voting from './Voting.jsx';

export default class ReplyItem extends Component {
    render() {
        // const { text, completed, onToggle, onDelete } = this.props;

        return (
            <div className="comment-item">
            <div className="comment-header">
              <span className="comment-author">
                <a href="#">
                   User-name
                </a>
              </span>
              <time className="comment-timestamp">12 min ago</time>
            </div>
            <div className="comment-body">
              <span className="reply-target">@User1</span> The only really bad position is when you go
              first and you dont have a natural selection or flash reincarnation. Even in these
              scenarios though, you can usually skirt away and clear the board.
            </div>
            <div className="comment-actions">
              <Voting />
              <button className="btn btn-xs btn-reply">reply</button>
            </div>
          </div>
        );
    }
}