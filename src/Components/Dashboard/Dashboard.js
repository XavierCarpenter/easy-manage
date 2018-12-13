import React, { Component } from 'react';
import { connect } from "react-redux";
import { getUser } from "../../ducks/reducer";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import './Dashboard.css'


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: "",
            tasks: ""
        }
    }
    componentDidMount() {
        this.props.getUser().then(() => {
            axios.get(`/api/project/${this.props.user.id}`).then(results => {
                this.setState({ project: results.data[0] })
            }).then(() => {

                axios.get(`/api/tasks/${this.state.project.id}`).then(results => {
                    console.log(results.data)
                    this.setState({ tasks: results.data })
                })
            })

        })
    }
    render() {
        console.log(this.state.tasks)
        let tasks = this.state.tasks && this.state.tasks.map((obj, i) => {
            return(
                <div key={i} className="task">
                    <h3>{obj.title}</h3>
                    <h3>Assigned: {obj.name}</h3>
                    <button id="left-btn">View Project</button>
                    <button id="right-btn">Complete Task</button>
                </div>
            )
        })
        let main = this.state.tasks && this.state.tasks.map((obj, i) => {
            return (
                <div key={i}>
                <p>Started: {obj.start_date}</p>
                <p>Completed: {obj.end_date === null ? "" : obj.end_date}</p>
                    <h1>{obj.title}</h1>
                    <p>{obj.description}</p>
                    
                </div>
            )
        })
        // description: "Setup a PostgreSQL database to store data for website"
        // end_date: null
        // id: 1
        // name: "Xavier Carpenter"
        // project_id: 1
        // start_date: "11/26/2018"
        // title: "Setup Database for website"

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
                                <p>Project:{this.state.project.name}</p>
                                <p>Task:</p>
                            </div>
                            <ul>
                                <li>{tasks}></li>
                                <li><div className="task">
                                    <h3>Build database for app</h3>
                                    <h3>Assigned:</h3>
                                    <button id="left-btn">View Project</button>
                                    <button id="right-btn">Complete Task</button>
                                </div></li>
                            </ul>
                        </div>
                        <div className="main-content">main-content
                        {main}
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}
const mapStateToProps = state => state;


export default withRouter(connect(mapStateToProps, { getUser })(Dashboard));