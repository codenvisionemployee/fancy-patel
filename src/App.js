import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./Account";
import Customer from "./Customer";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Logout from "./Logout";
import Main from "./Main";
import Marketing from "./Marketing";
import Materials from "./Materials";
import Report from "./Report";
import Reservation from "./Reservation";
import System from "./System";
import Tags from "./Tags";
import UserAccess from "./UserAccess";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route index element={<Main />} />
            <Route exact path="Dashboard" element={<Dashboard />} />
            <Route exact path="Reservation" element={<Reservation />} />
            <Route exact path="Customer" element={<Customer />} />
            <Route exact path="Materials" element={<Materials />} />
            <Route exact path="Report" element={<Report />} />
            <Route exact path="UserAccess" element={<UserAccess />} />
            <Route exact path="Account" element={<Account />} />
            <Route exact path="Tags" element={<Tags />} />
            <Route exact path="System" element={<System />} />
            <Route exact path="Marketing" element={<Marketing />} />
            <Route exact path="Logout" element={<Logout />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
