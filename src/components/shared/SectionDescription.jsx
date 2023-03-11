import React from 'react'
import styles from './shared.module.css';
function SectionDescription(props) {
    return (
        <>
            <p className={styles.sectionDescription}>{props.description}</p>
        </>
    )
}

export default SectionDescription
