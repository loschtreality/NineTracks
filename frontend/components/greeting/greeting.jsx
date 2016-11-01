import React from 'react';
import { Link } from 'react-router';
import SessionFormContainer from '../session_form/session_form_container';


function Greeting({currentUser, logout}){

	const personalGreeting = () => (
		<div>
		<h1>Welcome to Front End Auth!</h1>

		<h2>Hi, {currentUser.username}!</h2>

		<button onClick={logout}>Log Out</button>
		</div>
	);

  if (currentUser){
    return personalGreeting();
  } else {
    return <SessionFormContainer />;
  }
}

export default Greeting;
