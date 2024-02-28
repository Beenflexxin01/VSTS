import { Link } from "react-router-dom";
import p9 from "../../images/logo 1.png";
function Header() {
  return (
    <>
      <div className="container">
        <div className="grid-2 m-g">
          <div className="grid-2-cols m-t">
            <h1 className=" text-header">
              Welcome To Vertiline Synergy Training School.
            </h1>
            <p className="header-text">
              Start, switch, or advance your career with over # courses,
              Professional Certificates which has global recognition from
              reputable and qualified tutors
            </p>

            <button className="join">
              <Link to="/login" className="link">Get Started</Link>
            </button>
          </div>
          <div className="grid-2-cols header-image">
            <img src={p9} alt="" className="header-img hidden" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
