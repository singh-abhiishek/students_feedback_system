import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseDetails from './components/courseDetails/CourseDetails';
import Login from './pages/Login';
import { Signal } from 'lucide-react';
import Signup from './pages/SignUp';
import FallBackPage from './pages/FallBackPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<FallBackPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/course-details/:courseId' element={<CourseDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
