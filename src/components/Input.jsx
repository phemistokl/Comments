import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addComment } from '../actions';

@connect(undefined, { addComment })
export default class Input extends Component {
    constructor() {
        super();

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleAddComment = this.handleAddComment.bind(this);
    }

    state = {
        comment: ""
    }

    handleTextChange(e) {
        this.setState({
            comment: e.target.value
        });
    }

    handleAddComment() {
        this.props.addComment(this.state.comment);
        this.setState({ comment: "" });
    }

    render() {
        return (
            <div className="comment-entry">
                <div className="comment-entry-header">
                   <img alt="MyNick" src="http://i.playground.ru/i/00/00/00/00/user/default/icon.50x50.png"
               className="avatar-image size32" />MyNick
                </div>
                <div className="form-group">
                <textarea
                    className="form-control"
                    type="text"
                    placeholder="Put your shit here..."
                    value={this.state.comment}
                    onChange={this.handleTextChange}                   
                />
                </div>
                <div className="comment-entry-footer">
                  <button type="submit" className="btn btn-default btn-sm btn-block" onClick={this.handleAddComment}>Submit</button>
                </div>
            </div>
        );
    }
}
