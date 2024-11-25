// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import TutorChat from './components/TutorChat/TutorChat';
import DiscussionForum from './components/DiscussionForum/DiscussionForum';
import LiveWorkshops from './components/LiveWorkshops/LiveWorkshops';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="pt-16">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/tutor" element={<TutorChat />} />
                    <Route path="/foro" element={<DiscussionForum />} />
                    <Route path="/talleres" element={<LiveWorkshops />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
