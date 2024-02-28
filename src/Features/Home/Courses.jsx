import { useNavigate } from "react-router-dom";
import c1 from "../../images/c1.jpg";
import c2 from "../../images/c2.jpg";
import c3 from "../../images/c3.jpg";
import { HiMagnifyingGlass } from "react-icons/hi2";

function Courses() {
  const Navigate = useNavigate();
  return (
    <>
      <div className="container courses">
        <div className="course-flex">
          <h2 className="secondary-header">Our Courses</h2>
          <button className="view" onClick={() => Navigate("/courses")}>
            View All Courses <HiMagnifyingGlass size={'24px'} />
          </button>
        </div>
        <h3 className="feature">FEATURED COURSES</h3>

        <div className="grid-3">
          <div className="grid-3-cols">
            <img src={c1} alt="" className="grid-3-img" />
            <p className="img-text">Hospitality Business Management</p>
          </div>
          <div className="grid-3-cols">
            <img src={c3} alt="" className="grid-3-img" />
            <p className="img-text">
              Strategic Planning and Business Development
            </p>
          </div>
          <div className="grid-3-cols">
            <img src={c2} alt="" className="grid-3-img" />
            <p className="img-text">Financial Management Hospitality</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
