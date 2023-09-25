import React from 'react'
import styles from './RecipeCard.module.css'

function Navbar() {
  return (
    <>
      <div className={styles.navbar}> 
      <div className={styles.logo}> 
      Dynamic Recipes
      </div>
      <div className={styles.navitems}> 
      <div className={styles.navitem}> Recipes </div>
      <div className={styles.navitem}> Explore </div>
      <div className={styles.navitem}> About us </div>
      <div className={styles.navitem}> Contact </div>
      </div>
      </div>
    </>
  )
}

export default Navbar
