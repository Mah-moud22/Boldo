import React from 'react'
import Author from './Author'
import styles from './services.module.css'
function Testimonial(props) {
    return (
        <div className={`p-4 ${styles.testimonial}`}>
            <q>{props.quote}</q>
            <Author image={props.image} />
        </div>
    )
}

export default Testimonial
