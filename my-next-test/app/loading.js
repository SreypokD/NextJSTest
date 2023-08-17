import React from 'react'
import styles from './loading.module.css';
const loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>Loading...</p>
    </div>
  )
}

export default loading
