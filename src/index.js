import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserHistory as Router } from 'react-router-dom';
import App from './App';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route path="/" componen={App}/>
		</Router>
	</Provider>
, document.getElementById('app'));