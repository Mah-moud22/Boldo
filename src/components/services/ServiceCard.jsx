import React from 'react'
import styles from './services.module.css'
function ServiceCard(props) {
    return (
        <div className={styles.service_card}>
            <img src={props.image} alt="" />
            <p className={`ps-2 mt-3 ${styles.title}`}>{props.title}</p>
            <p className={`ps-2 ${styles.desc}`}>{props.desc}</p>
            <button type='button'>Explore page</button>
        </div>
    )
}

export default ServiceCard
