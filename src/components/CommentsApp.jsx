import React, { Component } from 'react';

import CommentsBox from './CommentsBox.jsx';
import AddComment from './AddComment.jsx';
import Footer from './Footer.jsx';

export default class CommentsApp extends Component {
    render() {
        return (
            <div className="comments-container">
                <div className="comments">
                    <div>
                        <AddComment />
                        <CommentsBox />
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}
