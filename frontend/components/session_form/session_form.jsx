import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: ""
		};
	}


	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	_handleSubmit(type){
		return () => {
			const user = this.state;
			this.props.processForm(user, type);
		};
	}

	renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div>
				{ this.renderErrors() }
				<div className="login-form-container">
						<div className="login-form">
							<br />
							<label> Username:
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input" />
							</label>

							<br />
							<label> Password:
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
							</label>

							<br />
							<button onClick={this._handleSubmit('login')}>Log In</button>
							<button onClick={this._handleSubmit('signup')}>Sign Up</button>
						</div>
				</div>
			</div>
		);
	}

}

export default SessionForm;
