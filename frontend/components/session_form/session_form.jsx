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
		const text = this.props.signIn === false ? "Sign In" : "Create Account"
		const process = this.props.signIn === false ? "login" : "signup"

		return (

			<div className="auth-form">
				<h3>{text}</h3>
			<form onSubmit={this._handleSubmit(process)}>
			{ this.renderErrors() }
				<div className="form-group">
					<label>User Name:</label>
					<input type="text" className="form-control" onChange={this.update("username")} placeholder="User Name" value={this.state.username}/>
				</div>

				<div className="form-group">
					<label>Password:</label>
						<input type="password" onChange={this.update("password")} className="form-control" value={this.state.password} placeholder="Password"/>

				</div>

			<button type="submit" className="btn btn-success">{text}</button>

			</form>
		</div>

		);
	}

}

export default SessionForm;
