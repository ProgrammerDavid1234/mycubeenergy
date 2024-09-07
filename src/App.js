// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'; 
import About from './Components/About/About';
import Faq from './Components/FAQ/Faq';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Dashboard from './Components/Dashboard/Dashboard';
import Transactions from './Components/Transactions/Transactions';
import Bills from './Components/Bills/BIlls';
import Topupunit from './Components/Topupunits/Topupunit';
import Topupwallet from './Components/Topupwallet/Topupwallet';
import Shareunits from './Components/ShareUnits/Shareunits'; 
import Settings from './Components/Settings/Settings';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import Otp from './Components/OTP/Otp';
import NewPassword from './Components/NewPassword/NewPassword';

function App() {
  const [authData, setAuthData] = useState({ token: '', username: '' });

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login setAuthData={setAuthData} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard authData={authData} />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/topupunit" element={<Topupunit />} />
          <Route path="/topupwallet" element={<Topupwallet />} />
          <Route path="/shareunits" element={<Shareunits />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/newpassword" element={<NewPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
