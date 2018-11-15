import React, { Component } from 'react';
import './Landing.css';


class Landing extends Component {
    render() {
        return (
            <div className="landing-container">
                <nav>home</nav>
                <div className="landing-box">
                    <div className="title">
                        <h1>Easy Manage</h1>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
                    </div>
                    <div className="login-container">
                        <div className="login-box" id="manager-login">
                            <h1>Manager Login</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <a href={process.env.REACT_APP_LOGIN}>
                                <button className="">Login</button>
                            </a>
                        </div>
                        <div className="login-box" id="employee-login">
                            <h1>Employee Login</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <a href={process.env.REACT_APP_LOGIN}>
                                <button className="">Login</button>
                            </a>
                        </div>

                    </div>
                    {/* <a href={process.env.REACT_APP_LOGIN}>
                        <button className="App-link">
                       Login
                       </button>
                    </a> */}
                </div>
            </div>
        );
    }
}

export default Landing;