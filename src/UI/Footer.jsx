import { NavLink } from "react-router-dom";
import logo from "../images/VSTS.png";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="grid-2 f-g">
          <div className="grid-2-col">
            <img
              src={logo}
              alt="Vertiline Synergy Training School"
              className="logo"
            />
            <div className="socials">
              <NavLink
                to="https://web.facebook.com/vertilinesynergyltd"
                target="blank">
                <FaFacebook size={"24px"} className="s-i" />
              </NavLink>

              <NavLink
                to="https://www.instagram.com/vertilinesynergy/"
                target="blank">
                <FaInstagram size={"24px"} className="s-i" />
              </NavLink>

              <NavLink to="https://twitter.com/Vertiline_SL" target="blank">
                <FaXTwitter size={"24px"} className="s-i" />
              </NavLink>

              <NavLink
                to="https://www.linkedin.com/in/vertiline-synergy/"
                target="blank">
                <FaLinkedin size={"24px"} className="s-i" />
              </NavLink>
            </div>
          </div>

          <div className="grid-2-cols add">
            <div className="m-b">
              <h4 className="header">Find Us</h4>
              <p className="text-description address">
                59, Awolowo Road, Ikoyi, Lagos State, Nigeria.
              </p>
              <p className="text-description">Tel: (+234) 705 331 0977</p>
              <p className="text-description address">
                Looking to get more information about us?
              </p>
              <p className="text-description">info@vertilinesynergy.com</p>
            </div>
          </div>
        </div>
        <p className="text-description f--t">
          &copy; 2014 VERTILINE SYNERGY LIMITED. All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
