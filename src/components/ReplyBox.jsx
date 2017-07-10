import React, { Component } from 'react';

import ReplyItem from './ReplyItem.jsx';

export default class ReplyBox extends Component {
    render() {
        // const { text, completed, onToggle, onDelete } = this.props;

        return (
            <div className="comment-reply">
                <ReplyItem />
                <ReplyItem />
            </div>
        );
    }
}