import React from 'react';

const LoginForm = (props) => {
    return (
        <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={props.PostInfor} action="/action_page.php">
                    <div className="form-group">
                        <label htmlFor="email">Username:</label>
                        <input className="form-control" id="username" placeholder="Enter username" name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" />
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" name="remember" /> Remember me
              </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;