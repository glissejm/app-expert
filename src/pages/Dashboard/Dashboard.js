import React from 'react';
import QuestionList from '../../components/QuestionList';
import Navbar from '../../components/Navbar';
import DashboardFilters from '../../components/DashboardFilters';
import './Dashboard.style.css';

export default function Dashboard() {
  return (
    <main id="dashboard">
      <Navbar />
      <div className="py-6 flex justify-center">
        <h2 className="text-4xl font-bold">Comienza a practicar</h2>
      </div>

      <article className="flex" id="box__dashboard">
        <DashboardFilters />
        <QuestionList />
      </article>
    </main>
  );
}
