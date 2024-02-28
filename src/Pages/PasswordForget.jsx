import { Link } from "react-router-dom";

function PasswordForget() {
  return (
    <>
      <div className="container">
        <div className="form-login">
          <h1 className="primary-header f-h">Forgot Password?</h1>
          <form action="">
            <ul className="ul-form">
              <li className="form-li">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="input-login"
                />
              </li>
            </ul>
            <button className="view login-btn">Submit</button>
            <p className="login-text l-g">
              Already have an account?
              <Link to="/login">log in</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default PasswordForget;
