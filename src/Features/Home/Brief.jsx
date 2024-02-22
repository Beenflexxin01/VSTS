import p1 from "../../images/p1.jpg";
function Brief() {
  return (
    <>
      <div className="container">
        <div className="grid-2">
          <div className="grid-2-cols">
            <img src={p1} alt="" className="grid-img" />
          </div>
          <div className="grid-2-cols">
            <h1 className="primary-header">
              Vertiline Synergy Training School
            </h1>
            <p className="text-description">
              Vertiline Synergy Training School is a modern training institute
              dedicated to empowering business owners and staff in the
              hospitality industry with the knowledge and skills they need to
              thrive in today's competitive market. We understand the unique
              challenges and opportunities faced by professionals in the
              industry, and our programs are designed to address these specific
              needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brief;
