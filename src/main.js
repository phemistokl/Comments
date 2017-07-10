import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import CommentsApp from './components/CommentsApp.jsx';

import store from './store';

ReactDOM.render(
	<Provider store={store}>
    	<CommentsApp />
    </Provider>,
    document.getElementById('root')
);
