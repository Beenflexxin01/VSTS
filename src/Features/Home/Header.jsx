import p9 from "../../images/logo 1.png";
function Header() {
  return (
    <div className="grid-2 m-g">
      <div className="grid-2-cols m-t">
        <h1 className=" text-header">
          Welcome To Vertiline Synergy Training School.
        </h1>
        <p className="header-text">
          Start, switch, or advance your career with over # courses,
          Professional Certificates which has global recognition from reputable
          and qualified tutors
        </p>

        <button className="join">Get Started</button>
      </div>
      <div className="grid-2-cols">
        <img src={p9} alt="" className="header-img" />
      </div>
    </div>
  );
}

export default Header;
