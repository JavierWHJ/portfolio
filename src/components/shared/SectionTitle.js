import React from 'react'
import styles from './SectionTitle.module.scss'

const SectionTitle = ({title}) => {
    return (
        <div>
            <h1 className={styles.heading}>{title}</h1>
            <hr/>
        </div>
    )
}

export default SectionTitle
