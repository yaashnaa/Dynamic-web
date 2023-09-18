import React from 'react'

function RecipeInfo(props) {
    const { title, description } = props;
  return (
    <div>
        <div className='title'> {title} </div>
        <div className='desc'> {description} </div>
    </div>
  )
}

export default RecipeInfo
