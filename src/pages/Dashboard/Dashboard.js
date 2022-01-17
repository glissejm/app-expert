import React from 'react';
import QuestionList from '../../components/QuestionList';
import Navbar from '../../components/Navbar';
import DashboardFilters from '../../components/DashboardFilters';
import './Dashboard.style.css';

export default function Dashboard() {
  return (
    <div id="dashboard">
      <Navbar />
      <div className="flex" id="box__dashboard">
        <DashboardFilters />
        <QuestionList />
      </div>
    </div>
  );
}
