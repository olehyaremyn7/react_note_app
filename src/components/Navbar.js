import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container">
            <NavLink className="navbar-brand" to="/" exact><strong>Note App<i className="fas fa-sticky-note ml-2"></i></strong></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-nav ml-4">
                        <NavLink className="nav-link active" to="/" exact><strong><i className="fas fa-home ml-1"></i> Home</strong></NavLink>
                    </li>

                    <li className="navbar-nav ml-2">
                        <NavLink className="nav-link" to="/about" exact>About</NavLink>
                    </li>
                </ul>

                <ul className="navbar-nav nav-flex-icons">
                    <li className="nav-item">
                        <a href="https://uk-ua.facebook.com/" className="nav-link mr-3">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="https://twitter.com/" className="nav-link mr-3">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="https://www.instagram.com/" className="nav-link border border-light rounded">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)