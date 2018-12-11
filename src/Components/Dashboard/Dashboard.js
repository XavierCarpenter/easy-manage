import React, { Component } from 'react';
import { connect } from "react-redux";
import { getUser } from "../../ducks/reducer";
import { Link, withRouter } from "react-router-dom";
import './Dashboard.css'


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.props.getUser();
        axios.get(`/api/projects/${this.props.user.id}`).then(results => {
            this.setState({ project: results.data });
        });
    }
    render() {
        console.log(this.props.user)
        return (
            <div className="Home">
                <nav className="main-nav">
                    <ul className="nav-items">
                        <li>Dashboard</li>
                        <li>Team</li>
                        <li>Notes</li>
                    </ul>
                    <a href={process.env.REACT_APP_LOGOUT}>
                        <button>Logout</button>
                    </a>
                </nav>
                <div className="Dashboard-content">
                    <h1 className="company-name">{this.props.user.company}</h1>
                    <div className="left-side">
                        <div className="manager-info">
                            <h1>My info</h1>
                            <h1>{this.props.user.name}</h1>
                            <p>{this.props.user.job_title}</p>
                        </div>
                        <div className="team-preview">
                            <h1>My Team</h1>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="tasks">Tasks
                        <div className="task-filter">
                            <p>Project:</p>
                            <p>Task:</p>
                            </div>
                            <ul>
                                <li><div className="task">
                                    <h3>Build database for app</h3>
                                    <h3>Assigned:</h3>
                                    <button id="left-btn">View Project</button>
                                    <button id="right-btn">Complete Task</button>
                                </div></li>
                                <li><div className="task">
                                    <h3>Build database for app</h3>
                                    <h3>Assigned:</h3>
                                    <button id="left-btn">View Project</button>
                                    <button id="right-btn">Complete Task</button>
                                </div></li>
                            </ul>
                        </div>
                        <div className="main-content">main-content</div>

                    </div>
                </div>

            </div>
        );
    }
}
const mapStateToProps = state => state;


export default withRouter(connect(mapStateToProps, { getUser })(Dashboard));