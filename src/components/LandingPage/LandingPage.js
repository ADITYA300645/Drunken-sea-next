import React from 'react'
import Styles from './LandingPage.module.css'
import { ST } from 'next/dist/shared/lib/utils'

function LandingPage() {
  return (
    <div className={Styles.bgCard}>Landing PAge
      <div className={Styles.searchBar}> 
        <div className={Styles.icon}>
            <div className={Styles.innerIcon}>
                <div className={Styles.inner2Icon}> </div>
            </div>
        </div>
        <input className={Styles.innerbgCard} placeholder='Sexxy'/>
        <button className={Styles.btn}>search</button>
      </div>
    </div>
  )
}

export default LandingPage