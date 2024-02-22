import logo from "../images/logo.png";
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
            <p className="text-description f-t">
              Vertiline Synergy Training School is a modern training institute
              dedicated to empowering business owners and staff in the
              hospitality industry with the knowledge and skills they need to
              thrive in today's competitive market.
            </p>
          </div>

          <div className="grid-2-cols add">
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
    </>
  );
}

export default Footer;
