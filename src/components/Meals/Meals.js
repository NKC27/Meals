import React from "react";
import MealCard from "../MealCard/MealCard";
import "./meals.css";

function Meals({ meals }) {
  return (
    <div className="mealContainer">
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} {...meal} />
      ))}
    </div>
  );
}

export default Meals;
