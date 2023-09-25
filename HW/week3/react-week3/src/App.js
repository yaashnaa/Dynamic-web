import React from "react";
import RecipeCard from "./RecipeCard";
import { RECIPE_LIST } from "./RecipeCard/recipe-data";
import Navbar from "./RecipeCard/Navbar";
import Header from "./RecipeCard/Header";

function App() {
  return (
    <>
      <Navbar />
    <Header/>
      <div
        style={{
          display: "flex",
          gap: "4rem",
          flexWrap: "wrap",
          marginTop: "3vh",
        }}
      >
        {RECIPE_LIST.map((recipe, index) => (
          <RecipeCard recipe={recipe} key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
