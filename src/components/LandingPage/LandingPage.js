import React from 'react'
import Styles from './LandingPage.module.css'
import { ST } from 'next/dist/shared/lib/utils'
import Image from "next/image"

function LandingPage() {
  return (
    <div className={Styles.bgCard}>Landing PAge
      <div className={Styles.searchBar}> 
        <div className={Styles.icon}>
            <div className={Styles.innerIcon}>
                <div className={Styles.inner2Icon}> </div>
            </div>
        </div>
        <input className={Styles.innerbgCard} placeholder='Search'/>
        <button className={Styles.btn}>search</button>
      </div>
      <div className={Styles.pageContent}>
        <p className={Styles.para1}>Treat it like never before</p>
        <p className={Styles.para2}>Sip, savor, smile – the simple joy of a good beer."</p> </div>
      < div className={Styles.readMore}>
        <div className={Styles.downArrow}> 
        <Image src={'/Logo/DownArrow.svg'}  height={24} width={24}></Image></div> 
        </div>
    </div>
  )
}

export default LandingPage