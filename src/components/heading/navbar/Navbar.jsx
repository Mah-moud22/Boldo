import React from 'react'
import Logo from '../../Logo'
import Button from '../../shared/Button'
import styles from './navbar.module.css'
function Navbar() {
    return (
        <nav className={`${styles.navigator} navbar navbar-expand-md`}>
            <div className="container">
                <Logo url="#" bg="#65E4A3" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse gap-2" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                    <Button title="Log In" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
