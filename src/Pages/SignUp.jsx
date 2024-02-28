import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <div className="container">
        <div className="form-login form-sign">
          <h1 className="primary-header f-h">Create Account</h1>
          <form action="">
            <ul className="ul-form">
              <li className="form-li">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="input-login"
                />
              </li>
              <li className="form-li">
                <input
                  type="email"
                  placeholder="Email"
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

            <button className="view login-btn">Sign Up</button>

            <p className="login-text l-g">
              Already have an account?
              <Link to="/login">log in</Link>`
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
