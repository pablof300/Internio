import React from 'react';
import './App.css'

import { BaseComponent } from '../components/BaseComponent/index'
import { DashboardComponent } from '../components/dashboard/DashboardComponent/index'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={() => <DashboardComponent />} />
      </Router>
    </>
  );
}

export default App;
