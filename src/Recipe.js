import React from 'react';
import style from './recipe.module.css';

const Recipe=({title,calories,image,ingredients})=>{
    return(
        <div className={style.item}>
            <h3>{title}</h3>
            <img className={style.itemImg} src={image} alt={title}/>
            <ol>
                {ingredients.map(ingredient=>(
                        <li key={ingredient.foodId}>{ingredient.text}</li>
                    ))}
            </ol>
            <b>Total Calories:{calories}</b>
            
        </div>
        );
}

export default Recipe;