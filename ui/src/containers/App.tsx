import React from 'react';
import './App.css'

import { BaseComponent } from '../components/BaseComponent/index'
import { DashboardComponent } from '../components/dashboard/DashboardComponent/index'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { LandingPage } from '../components/landing_page/LandingPage/LandingPage';
import { LoginPage } from '../components/landing_page/LoginPage/index';
import { SignupPage } from '../components/landing_page/SignupPage/index';
const App: React.FC = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={() => <LandingPage />} />
        <Route exact path="/login" component={() => <LoginPage />} />
        <Route exact path="/dashboard" component={() => <DashboardComponent />} />
        <Route exact path="/signup" component={() => <SignupPage />} />
      </Router>
    </>
  );
}

export default App;
