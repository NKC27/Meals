import React from "react";
import { Card, Button } from "react-bootstrap";
import MealModel from "../MealModel/MealModel";

function MealCard({
  strMeal,
  strMealThumb,
  strInstructions,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
  strIngredient6,
  strIngredient7,
  strIngredient8,
  strIngredient9,
  strIngredient10,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={strMealThumb} />
      <Card.Body>
        <Card.Title>{strMeal}</Card.Title>
        <MealModel title={strMeal} description={strInstructions} />
        <Card.Text>
          <h5>Ingredients</h5>
          <p>{strIngredient1}</p>
          <p>{strIngredient2}</p>
          <p>{strIngredient3}</p>
          <p>{strIngredient4}</p>
          <p>{strIngredient5}</p>
          <p>{strIngredient6}</p>
          <p>{strIngredient7}</p>
          <p>{strIngredient8}</p>
          <p>{strIngredient9}</p>
          <p>{strIngredient10}</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MealCard;
