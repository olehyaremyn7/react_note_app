import React from 'react'

export const About = () => (
    <div className="jumbotron">
        <div className="container">
            <h1 className="display-4">React Note App</h1>
            <p className="lead">App version <strong>1.0.7</strong></p>
            <hr className="my-4"></hr>
            <p className="lead">Author: <strong><a href="/" className="active">Oleh Yaremyn</a></strong></p>
            <p className="lead">Contacts: <i><a href="/" className="active">oleh_yaremyn@ukr.net</a></i></p>
            <a className="btn btn-primary btn-lg mt-3" href="#" role="button">Learn more</a>
        </div>
    </div>
)