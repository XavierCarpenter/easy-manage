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
                    <div className="Dashboard-content">
                    <div className="left-side">
                    <div className="manager-info">
                    <h1>Dashboard</h1>
                    </div>
                <div className="team-preview">
                    <h1>My Team</h1>
                </div>
                </div>
                <div className="right-side">
                <div className="tasks">Tasks</div>
                <div className="main-content">main-content</div>
                
                </div>
                </div>
             
            </div>
        );
    }
}

export default Dashboard;