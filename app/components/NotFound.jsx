import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {

	render() {
		return (
			<div>
				<h2>404 Not Found</h2>
				<Link to='home'>Back</Link>
			</div>
		);
	}

}
