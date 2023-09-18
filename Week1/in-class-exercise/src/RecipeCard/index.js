import React from "react";
import FoodImg from "../assets/img.png";
import { RECIPE } from "./recipe-data";
import "../style.css";
import RecipeInfo from "./RecipeInfo";
import InstructionsList from "./InstructionsList";
import IngredientsList from "./IngredientsList";
import RecipeImg from "./RecipeImg";

export default function RecipeCard() {
  return (
    <>
    
        <div className="recipe-box">
          <RecipeImg image={RECIPE.imgSrc} />

          <div className="recipe-details">
            <RecipeInfo title={RECIPE.title} description={RECIPE.description}/>
            <div className="recipe">
            <IngredientsList ingredients={RECIPE.ingredients} />
              <InstructionsList instructions={RECIPE.instructions} />

            </div>
          </div>
        </div>

    </>
  );
}




