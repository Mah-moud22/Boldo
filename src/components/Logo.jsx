import React from 'react'
import styles from '../components/heading/navbar/navbar.module.css'
function Logo(props) {
    return (
        <a className="navbar-brand text-white d-flex align-items-center gap-2" href={props.url}>
            <div className={`${styles.logo} gap-1`}>
                <div className={styles.logo_top_rectangle} style={{backgroundColor: props.bg}}></div>
                <div className={styles.logo_bottom_rectangle} style={{backgroundColor: props.bg}}></div>
            </div>
            <span style={{color: props.fontColor}}>Boldo</span>
        </a>
    )
}

export default Logo
