import React from 'react'
import styles from './services.module.css'
function Author(props) {
    return (
        <div className={`mt-4 d-flex gap-2 ${styles.author}`}>
            <img src={props.image} alt="" />
            <div>
                <p>Albus Dumbledore</p>
                <p>Manager @ Howarts</p>
            </div>
        </div>
    )
}

export default Author
