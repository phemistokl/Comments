import React, { Component } from 'react';

export default class Voting extends Component {
    render() {
        const { like } = this.props;

        return (
              <div className="comment-voting">
                <button className="up"></button>
                <div className="score">{like}</div>
                <button className="down"></button>
              </div>
        );
    }
}