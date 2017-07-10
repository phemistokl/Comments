import React, { Component } from 'react';
import { connect } from 'react-redux';

import CommentHeader from './CommentHeader.jsx';
import Comment from './Comment.jsx';

@connect(mapStateToProps)
export default class CommentsBox extends Component {

    render() {
    	console.log(this.props.comments);
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

function mapStateToProps(state) {
	return {
		comments: state
	};
}

