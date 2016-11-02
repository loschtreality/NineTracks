import React from 'react'

class SignIn extends React.Component {
  render () {
    return (
      <form>

          <div className="form-group">
            <label>User Name </label>
              <input type="text" className="form-control" placeholder="User Name"></input>

          </div>

          <div className="form-group">
            <label>Password </label>
              <input type="password" className="form-control" placeholder="Password"></input>

          </div>

        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    )
  }
}

export default SignIn;
