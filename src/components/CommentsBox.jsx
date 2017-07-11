import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getComments } from '../actions';

import CommentHeader from './CommentHeader.jsx';
import Comment from './Comment.jsx';

@connect(mapStateToProps, { getComments })
export default class CommentsBox extends Component {

    // componentWillMount() {
    //     this.props.getComments();
    // }

    // componentWillMount() {
    //     this.props.getComments();
    // }

    render() {
        return (
            <div className="comments-flow">
                        <CommentHeader />
                        {
                        	this.props.comments.map(comment => 
                        		<Comment 
                        			key={comment.id}
                        			id={comment.id}
                        			name={comment.name}
                        			comment={comment.comment}
                        			date={comment.date}
                        			like={comment.like}
                        	/>
                        	)
                        }
             </div>     
        );
    }
}

function getSortedComments(comments, sort) {
    switch (sort) {
        case 'NEWEST':
            return comments.sort((a ,b) => {
                return a.date.getTime() - b.date.getTime() ? 1 : -1;
            });

        case 'OLDEST': 
            return comments.sort((a ,b) => {
                return b.date.getTime() - a.date.getTime() ? 1 : -1;
            });

        case 'BEST':
            return comments.sort((a ,b) => {
                return a.like < b.like ? 1 : -1;
            });
    }
}

function mapStateToProps(state) {
    console.log(state)
	return {
		comments: getSortedComments(state.comments, state.sort)
	};
}

