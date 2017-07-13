import React, { Component } from 'react';

import ReplyItem from './ReplyItem.jsx';

export default class ReplyBox extends Component {
    render() {
    	
        const { reply } = this.props;

        const countComments = comments => {
			return comments.reduce(
	    		(count, comment) => (
		        	comment.reply
		          ? count.concat(comment, countComments(comment.reply))
		          : count.concat(comment)
		        ),
		    	[]
		    )
		};

        const replys = (reply != undefined ) ? (countComments(reply)) : false;

        return (
            <div className="comment-reply"> 
                		{
                        	replys.map(reply => 
                        		<ReplyItem 
                        			key={reply.id}
                        			id={reply.id}
                        			name={reply.name}
                        			comment={reply.comment}
                        			date={reply.date}
                        			like={reply.like}
                        			replyTo={reply.replyTo}
                        	/>
                        	)
                        }
            </div>
        );
    }
}