import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => (
    <section>
        <h1>Dashboard</h1>
        <p>This is the dashboard.</p>

        <Link to="/characters" className="button">View Characters</Link>
        <Link to="/talents" className="button">View Talent Tree</Link>
    </section>
);

export default DashboardPage;