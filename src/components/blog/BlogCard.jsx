import React from 'react'
import Author from '../services/Author'
import styles from './blog.module.css'


function BlogCard(props) {
    return (
        <div className={styles.blog_card}>
            <img src={props.image} alt="" />
            <p className={`ps-2 mt-3 ${styles.title}`}>{props.title} <span className='ms-1'>{props.date}</span></p>
            <p className={`ps-2 ${styles.desc}`}>{props.desc}</p>
            <Author image={props.authorImage} />
        </div>
    )
}

export default BlogCard
