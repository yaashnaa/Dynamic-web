import React from 'react'

export default function IngredientsList(props) {
    const { ingredients } = props;
    return (
      <div>
        <div className='title-1'>Ingredients</div>
        <ul>
          {ingredients.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
      </div>
    );
}
