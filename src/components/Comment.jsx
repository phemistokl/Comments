import React, { Component } from 'react';

import ReplyBox from './ReplyBox.jsx';
import Voting from './Voting.jsx';
import Time from './Time.jsx';

export default class Comment extends Component {
    render() {

        const { name, comment, date, like, reply } = this.props;

        if (reply != undefined) {
          return (
            <div className="comment-wrapper comment-wrapper-has-reply">
                  <div className="comment-item">
                    <div className="comment-header">
                      <span className="comment-author">
                        <a href="#"><img alt={name}
                     src="http://i.playground.ru/i/00/00/00/00/user/default/icon.50x50.png"
                     className="avatar-image size32" />{name}
                        </a>
                      </span>
                      <div className="comment-timestamp">
                      <Time date={date} />
                      </div>
                    </div>
                    <div className="comment-body">
                      {comment}
                    </div>
                    <div className="comment-actions">
                      <Voting like={like} />
                      <button className="btn btn-xs btn-reply">reply</button>
                    </div>
                  </div>
                  <ReplyBox reply={reply} />
              </div>
          ); 
        } else {
            return (
                    <div className="comment-item">
                      <div className="comment-header">
                        <span className="comment-author">
                          <a href="#"><img alt={name}
                     src="http://i.playground.ru/i/00/00/00/00/user/default/icon.50x50.png"
                     className="avatar-image size32" />{name}
                          </a>
                        </span>
                        <div className="comment-timestamp">
                        <Time date={date} />
                        </div>
                      </div>
                      <div className="comment-body">
                        {comment}
                      </div>
                      <div className="comment-actions">
                        <Voting like={like} />
                        <button className="btn btn-xs btn-reply">reply</button>
                      </div>
                    </div>
            ); 
        }
        
    }
}
