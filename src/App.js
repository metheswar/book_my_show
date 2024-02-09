import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './Header';
import BookingPage from './BookingPage';

const App = () => {
  return (
    <Router>
       <Header />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookingPage />} />
        </Routes>

    </Router>
  );
};

export default App;
