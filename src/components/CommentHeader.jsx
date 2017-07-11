import React, { Component } from 'react';

import SortLink from './SortLink.jsx';

export default class CommentHeader extends Component {
    render() {
        return (
            <div className="comments-header">
                <div className="pull-right">
                  <SortLink sort="BEST">Best</SortLink> |
                  <SortLink sort="NEWEST">Newest</SortLink> |
                  <SortLink sort="OLDEST">Oldest</SortLink>
                </div>
                <b>6 Comments</b>
            </div>
        );
    }
}
