import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import CourseDetails from './components/courseDetails/CourseDetails';
import Login from './pages/Login';
import { Signal } from 'lucide-react';
import Signup from './pages/SignUp';
import FallBackPage from './pages/FallBackPage';
=======
import CourseDetails from './pages/CourseDetails';
>>>>>>> upstream/main

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
<<<<<<< HEAD
        <Route path='*' element={<FallBackPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/course-details/:courseId' element={<CourseDetails />} />
=======
>>>>>>> upstream/main
      </Routes>
    </Router>
  );
};

export default App;
