import React from 'react'
import styles from './shared.module.css';
function SectionHeader(props) {
    return (
        <>
            <h3 className={`${styles.sectionHeader} py-5`}>{props.title}</h3>
        </>
    )
}

export default SectionHeader
