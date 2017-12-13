import React from 'react';

const App = (props) => {
	return (
		<div>
			<p>hello world!</p>
			<p>what your name 1 2 ?</p>
			{ JSON.stringify(props.history.location) }
		</div>
	)
};

	
export default App;