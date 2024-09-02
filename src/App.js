import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Components/Home/Home'; 
import About from './Components/About/About';
import Faq from './Components/FAQ/Faq';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Dashboard from './Components/Dashboard/Dashboard';
import Transactions from './Components/Transactions/Transactions';
import Bills from './Components/Bills/BIlls';
import Topupunits from './Components/Topupunits/Topupunit'
import Topupwallet from './Components/Topupwallet/Topupwallet';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/bills" element={<Bills />} />
          
          <Route path="/topupunits" element={<Topupunits />} />
          <Route path="/topupwallet" element={<Topupwallet />} />





        </Routes>
      </div>
    </Router>
  );
}

export default App;
