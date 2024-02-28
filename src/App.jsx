import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ApplLayout from "./UI/ApplLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";
import Courses from "./Pages/Courses";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ApplLayout />}>
          <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="courses" element={<Courses />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
