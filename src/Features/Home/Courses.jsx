import c1 from "../../images/c1.jpg";
import c2 from "../../images/c2.jpg";
import c3 from "../../images/c3.jpg";
import c8 from "../../images/c8.jpg";
import c5 from "../../images/c5.jpg";
import c7 from "../../images/c7.jpg";
import { HiCalculator, HiCreditCard, HiOutlineServer } from "react-icons/hi2";
function Courses() {
  return (
    <>
      <div className="container courses">
        <h2 className="secondary-header">Our Courses</h2>
        <p className="text-description c-t">
          We offer a range of specialized courses and workshops tailored
          specifically for our business owners and staff in the hospitality
          industry.Our curriculum covers essential nareas that are crucial for
          success in this dynamic field, including:
        </p>
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
          <div className="grid-3-cols">
            <img src={c8} alt="" className="grid-3-img" />
            <p className="img-text">
              Business Marketing and Branding Strategies
            </p>
          </div>
          <div className="grid-3-cols">
            <img src={c5} alt="" className="grid-3-img" />
            <p className="img-text">Operations and Quality Management</p>
          </div>
          <div className="grid-3-cols">
            <img src={c7} alt="" className="grid-3-img" />
            <p className="img-text">Leadership and Team Development</p>
          </div>
        </div>

        <div className="others ">
          <h2 className="secondary-header">Other Courses Include</h2>
          <div className="grid-3">
            <div className="grid-3-cols">
              <h3 className="tertiary-header">
                Hospitality Customer Service Excellence{" "}
                <HiOutlineServer size={"24px"} />
              </h3>
              <ul className="o-u">
                <li className="o-l">Creating a Customer Centric Culture</li>
                <li className="o-l">
                  Effective Communication and Interpersonal skills
                </li>
                <li className="o-l">Conflict Resolution and Problem Solving</li>
                <li className="o-l">Building Customer Loyalty and Retention</li>
                <li className="o-l">Handling Difficult Customers</li>
              </ul>
            </div>

            <div className="grid-3-cols">
              <h3 className="tertiary-header">
                Hospitality Finance and Accounting{" "}
                <HiCalculator size={"24px"} />
              </h3>
              <ul className="o-u">
                <li className="o-l">Reservation Mnagement Systems</li>
                <li className="o-l">Handling Guest Inquiries and Requests</li>
                <li className="o-l">
                  Telephone Etiquette and Communication Skills
                </li>
                <li className="o-l">Probelm Solving and Complaint Handling</li>
              </ul>
            </div>

            <div className="grid-3-cols">
              <h3 className="tertiary-header">
                Check-in and Check-out Procedures <HiCreditCard size={"24px"} />
              </h3>
              <ul className="o-u">
                <li className="o-l">Creating a Customer Centric Culture</li>
                <li className="o-l">
                  Effective Communication and Interpersonal skills
                </li>
                <li className="o-l">Conflict Resolution and Problem Solving</li>
                <li className="o-l">Building Customer Loyalty and Retention</li>
                <li className="o-l">Handling Difficult Customers</li>
              </ul>
            </div>

            <div className="grid-3-cols">
              <h3 className="tertiary-header">
                Hospitality Law and Regulations
              </h3>
              <ul className="o-u">
                <li className="o-l">
                  Legal Considerations for the Hospitality Industry
                </li>
                <li className="o-l">Licensing and Permits Requirements</li>
                <li className="o-l">Employment Laws and Regulations</li>
                <li className="o-l">Contract Management and Negotiations</li>
                <li className="o-l">
                  Intellectual Property and Copyright Laws
                </li>
              </ul>
            </div>

            <div className="grid-3-cols">
              <h3 className="tertiary-header">House Keeping Staff</h3>
              <ul className="o-u">
                <li className="o-l">Cleaning Techniques and Standards</li>
                <li className="o-l">Room Setup and Amenities Replenishment</li>
                <li className="o-l">
                  Laundry Operations and Handling of Guest Laundry
                </li>
                <li className="o-l">
                  Attention to Detail and Maintaining Cleanliness
                </li>
                <li className="o-l">
                  Effective Time Management and Task Prioritization
                </li>
              </ul>
            </div>

            <div className="grid-3-cols">
              <h3 className="tertiary-header">Hotel Administration</h3>
              <ul className="o-u">
                <li className="o-l">
                  Hotel Accounting and Financial Management
                </li>
                <li className="o-l">Revenue Management and Distribution</li>
                <li className="o-l">
                  Human Resources Management in Hospitality
                </li>
                <li className="o-l">
                  Marketing and Sales for the Hospitality Industry
                </li>
                <li className="o-l">Customer Relationship Management</li>
              </ul>
            </div>

            <div className="grid-3-cols">
              <h3 className="tertiary-header">Tourism and Travel Managemet</h3>
              <ul className="o-u">
                <li className="o-l">Introduction to the Tourism Industry</li>
                <li className="o-l">Travel Agency Operations and Management</li>
                <li className="o-l">
                  Tour Planning and Guiding Sustainable Tourism Development
                </li>
                <li className="o-l">Taxation and Legal Complaince</li>
              </ul>
            </div>

            <div className="grid-3-cols">
              <h3 className="tertiary-header">Food and Beverage Management</h3>
              <ul className="o-u">
                <li className="o-l">Menu Planning and Development</li>
                <li className="o-l">Beverage operations and Management</li>
                <li className="o-l">Food Safety and Hygiene Practices</li>
                <li className="o-l">Restaurant and Bar Service Excellence</li>
              </ul>
            </div>

            <div className="grid-3-cols">
              <h3 className="tertiary-header">
                Hospitality Technology and Digital Transformation
              </h3>
              <ul className="o-u">
                <li className="o-l">Introduction to Hospitality Technology</li>
                <li className="o-l">Revenue Management Systems and Tools</li>
                <li className="o-l">
                  Customer Relationship Management (CRM) Systems
                </li>
                <li className="o-l">Online Booking and Channel Management</li>
                <li className="o-l">
                  Data Analytics and Business Intelligence
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
