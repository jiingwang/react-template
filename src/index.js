import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import middlewares from './middleware';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import App from './App';
import reducers from './redux/reducers';


const store = createStore(reducers,
	applyMiddleware(middlewares)
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route path="/" component={App}/>
		</Router>
	</Provider>
, document.getElementById('app'));