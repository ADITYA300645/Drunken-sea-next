import React from 'react'
import Styles from "./TodaysDeal.module.css"

function TodaysDeal() {
  return (
    <div className={Styles.todaysDeals}>
       <div className={Styles.content}>
      <p className={Styles.para1}> Today’s Deals</p>
      <p className={Styles.para2}> Make your day beautiful and precious after a sip of beer
      </p>

       </div>
       <div className={Styles.productContainer}>
        <div className={Styles.product}>
          <div className={Styles.productImage}>
            
          </div>
          <div className={Styles.productDescription}>
            <div className={Styles.Discount}><p>Up to 50% Discount</p></div>
            <div className={Styles.Rate}><p className={Styles.price}>$999</p>
            <p className={Styles.originalRate}>$499 Only</p></div>
          </div>
        </div>

       </div>
    </div>
  )
}

export default TodaysDeal