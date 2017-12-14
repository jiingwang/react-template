import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}


	render() {
		return (
			<div>{ this.props.name }</div>
		);
	}
}



