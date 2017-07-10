import React, { Component } from 'react';

export default class Input extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="comment-entry">
                <div className="comment-entry-header">
                   MyNick
                </div>
                <div className="form-group">
                <input
                    className="form-control"                   
                />
                </div>
                <div className="comment-entry-footer">
                  <button type="submit" className="btn btn-default btn-sm btn-block">Submit</button>
                </div>
            </div>
        );
    }
}
