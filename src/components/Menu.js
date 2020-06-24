import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Menu extends Component {


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Store shoes management</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Catalog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/add">Add new pair</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu;