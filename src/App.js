import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Profile from './components/pages/profile'
import Contact from './components/pages/contact'
import Project from './components/pages/project'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}/> 
        <Route path='/profile' exact element={<Profile />}/>
        <Route path='/contact' exact element={<Contact />}/>
        <Route path='/projects' exact element={<Project />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
