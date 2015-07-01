import React from 'react';
import { RouteHandler } from 'react-router';
import connectToStores from 'alt/utils/connectToStores';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

@connectToStores
class App extends React.Component {

	constructor(props) {
		super(props);
	}

	static getStores() {
		return [AppStore];
	}

	static getPropsFromStores() {
    return AppStore.getState();
  }

	handleSubmit(e) {
		e.preventDefault();
		if (this.props.logined) {
			AppActions.logout();
		} else {
			AppActions.login();
		}
	}

	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<div>
					<div>Login Status: { this.props.logined ? 'True' : 'False' }</div>
					<form className="loginForm" onSubmit={this.handleSubmit.bind(this)}>
						<input type="submit" value={ this.props.logined ? 'Logout' : 'Login' } />
					</form>
				</div>
				<RouteHandler/>
			</div>
		);
	}

}

export default App;
