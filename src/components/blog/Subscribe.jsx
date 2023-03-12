import React from 'react'
import styles from './blog.module.css'
import Button from '../shared/Button'
function Subscribe() {
    return (
        <div className={`py-5 mb-5 rounded-1 ${styles.subscribe}`}>
            <h3>An enterprise template to ramp up your company website</h3>
            <form action="">
                <div className="row justify-content-center m-0 mt-4">
                    <div className="col-5 d-flex justify-content-end">
                        <input type="email" className="form-control" placeholder="Your email address" name="email" />
                    </div>
                    <div className="col-2 d-flex justify-content-start">
                        <Button title="Start Now" bg="#65E4A3" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Subscribe
