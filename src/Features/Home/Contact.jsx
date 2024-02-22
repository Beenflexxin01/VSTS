import d1 from "../../images/d1.jpg";

function Contact() {
  return (
    <>
      <div className="containe">
        <div className="contact grid-2">
          <div className="grid-2-cols g-w">
            <img src={d1} alt="" className="c-g" />
          </div>

          <div className="grid-2-cols g-w">
            <h1 className="primary-header p-h">
              Join us as you invest in the growth and success of your
              hospitality business or career with VSTS
            </h1>
            <p className="text-description">
              Contact us today to explore our program offerings, admission
              requirements, and enrollment procedures.
            </p>

            <form action="" className="form">
              <ul className="form-ul">
                <div className="name">
                  <li className="form-li">
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      className="input"
                    />
                  </li>
                  <li className="form-li">
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      className="input"
                    />
                  </li>
                </div>
                <div className="name">
                  <li className="form-li">
                    <input
                      type="email"
                      placeholder="Email"
                      className="input"
                      required
                    />
                  </li>

                  <li className="form-li">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="input"
                      required
                    />
                  </li>
                </div>

                <li className="form-li">
                  <textarea
                    name="text"
                    placeholder="Your Message"
                    className="input text-area"></textarea>
                </li>
              </ul>
              <button className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
