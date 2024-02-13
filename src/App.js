import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import 'Routes' instead of 'Switch'
import CourseList from "./Components/CourseListing/CourseList";
import CourseDetails from "./Components/CourseDetails/CouseDetails";
import StudentDashboard from "./Components/StudetnDashboard/StudentDashboard";
import Navigation from "./Components/Navigation/Navigation";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
