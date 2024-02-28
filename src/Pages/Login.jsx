import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container">
        <div className="form-login">
          <h1 className="primary-header f-h">Account Login</h1>
          <form action="">
            <ul className="ul-form">
              <li className="form-li">
                <input
                  type="text"
                  placeholder="Username"
                  required
                  className="input-login"
                />
              </li>
              <li className="form-li">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="input-login"
                />
              </li>
            </ul>
            <button className="view login-btn">Submit Login</button>

            <div className="sign-up">
              <p className="login-text">
                <Link to='/forgot-password'>forgot password?</Link>
              </p>
              <p className="login-text">
                <Link to="/sign-up" className="link">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
