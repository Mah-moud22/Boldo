import React from 'react'
import styles from './shared.module.css';
function Button(props) {
    return (
        <>
            {(props.bg === undefined)?(<button className={`${styles.customBtn} rounded-4 border-0 px-4 py-2`} type='button'>{props.title}</button>):
            (<button className={`${styles.customBtn} rounded-4 border-0 px-4 py-2`} type='button' style={{backgroundColor:props.bg, color: "white"}}>{props.title}</button>)
            }
        </>
    )
}

export default Button
