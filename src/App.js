import React from 'react';
import Login from './views/Login';

const App = (props) => {
	return (
		<div>
			<p>hello world!</p>
			<p>what your name 1 2 ?</p>
			{ JSON.stringify(props.history.location) }
			<Login />
		</div>
	)
};

	
export default App;