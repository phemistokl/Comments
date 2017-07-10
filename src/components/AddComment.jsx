import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import { addTodo } from '../actions';

import Input from './Input.jsx';

// @connect(undefined, { onAddTodo: addTodo })
export default class AddComment extends Component {
    render() {
        return (
	        <div> 
	        	<Input />
	        </div>
	    );
    }
}
