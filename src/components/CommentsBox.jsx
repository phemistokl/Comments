import React, { Component } from 'react';
import { connect } from 'react-redux';

import CommentHeader from './CommentHeader.jsx';
import Comment from './Comment.jsx';

@connect(mapStateToProps)
export default class CommentsBox extends Component {

    render() {

        const totalComments = comments => {
            return comments.reduce(
                (total, comment) => (
                    comment.reply
                  ? total + 1 + totalComments(comment.reply)
                  : total + 1
                ),
                0
            )
        };

        const total = totalComments(this.props.comments);
        
        return (
            <div className="comments-flow">
                        <CommentHeader total={total} />
                        {
                        	this.props.comments.map(comment => 
                        		<Comment 
                        			key={comment.id}
                        			id={comment.id}
                        			name={comment.name}
                        			comment={comment.comment}
                        			date={comment.date}
                        			like={comment.like}
                                    reply={comment.reply}
                        	   />
                        	)
                        }
             </div>     
        );
    }
}



function getSortedComments(comments, sort) {
    const newarr = [];
    switch (sort) {
        case 'NEWEST':
            comments.sort((a, b) => {
                return a.date.getTime() < b.date.getTime() ? 1 : -1;
            });
            return newarr.concat(comments);

        case 'OLDEST': 
            comments.sort((a, b) => {
                return a.date.getTime() > b.date.getTime() ? 1 : -1;
            });
            return newarr.concat(comments);

        case 'BEST':
            comments.sort((a, b) => {
                return a.like < b.like ? 1 : -1;
            });
            return newarr.concat(comments);
    }
}

function mapStateToProps(state) {
	return {
		comments: getSortedComments(state.comments, state.sort)
	};
}

