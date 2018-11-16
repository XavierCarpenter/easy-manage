import React, { Component } from 'react';
import './Dashboard.css'


class Dashboard extends Component {
    render() {
        return (
            <div className="Home">
                <nav className="main-nav">
                    <ul className="nav-items">
                        <li>Dashboard</li>
                        <li>Team</li>
                        <li>Notes</li>
                    </ul>
                    </nav>
              <h1>Dashboard</h1>
            </div>
        );
    }
}

export default Dashboard;