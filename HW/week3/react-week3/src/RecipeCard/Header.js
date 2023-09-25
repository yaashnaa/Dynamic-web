import React from 'react'

import styles from './RecipeCard.module.css'

function Header() {
  return (
    <>
    <div class={styles.six}>
        <h1>
          Dynamic Recipes
          <div>Food we guarantee you'll love</div>
        </h1>
      </div>
    </>
  )
}

export default Header
