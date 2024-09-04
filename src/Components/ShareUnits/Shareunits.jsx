import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Shareunits.module.css'
const Shareunits = () => {
  return (
    <div>
        <Sidebar />
        <div className={styles.shareunits}>
            <h4>Share Units</h4>
        </div>
    </div>
  )
}

export default Shareunits
