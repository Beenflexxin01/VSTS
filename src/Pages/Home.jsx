import Brief from "../Features/Home/Brief";
import Contact from "../Features/Home/Contact";
import Courses from "../Features/Home/Courses";
import Features from "../Features/Home/Features";
import Footer from "../UI/Footer";

function Home() {
  return (
    <div>
      <Brief />
      <Courses />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
