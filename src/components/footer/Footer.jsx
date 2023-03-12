import React from 'react'
import Logo from '../Logo'
import styles from './footer.module.css'

function Footer() {
    return (
        <footer className='py-5'>
            <div className="container">
                <div className="row">
                    <div className={`col text-start ${styles.logo}`}>
                        <Logo url="#" bg="#0A2640" fontColor="#0A2640" />
                        <p>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
                        <small>All rights reserved.</small>
                    </div>
                    <div className="col-8">
                        <div className="row m-0 justify-content-evenly">
                            <div className={`col-2 text-start ${styles.group}`}>
                                <h3>Landings</h3>
                                <a href='#'>Home</a>
                                <a href='#'>Products</a>
                                <a href='#'>Services</a>
                            </div>
                            <div className={`col-2 text-start ${styles.group}`}>
                                <h3>Company</h3>
                                <a href='#'>Home</a>
                                <a href='#'>Careers</a>
                                <a href='#'>Services</a>
                            </div>
                            <div className={`col-2 text-start ${styles.group}`}>
                                <h3>Resources</h3>
                                <a href='#'>Blog</a>
                                <a href='#'>Products</a>
                                <a href='#'>Services</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
