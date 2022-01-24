import React from 'react';
import QuestionList from '../../components/QuestionList/QuestionList';
import NavbarClient from '../../components/NavbarClient/NavbarClient';
import DashboardFilters from '../../components/DashboardFilters/DashboardFilters';
import './Dashboard.style.css';

export default function Dashboard() {
  return (
    <main id="dashboard">
      <NavbarClient />
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
