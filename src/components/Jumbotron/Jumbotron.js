import React, { useState, useContext } from "react";
import "./jumbotron.css";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import { MyContext } from "../../context";
import axios from "axios";

function Feature() {
  const [searchInput, setSearchInput] = useState("");
  const { setMeals } = useContext(MyContext);

  function handleSearch() {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
      )
      .then(({ data }) => setMeals(data.meals));
  }
  return (
    <div class="jumbotron">
      <h1>Welcome to Bish! Bash! Bosh!</h1>
      <h2>Bish that bashin' bosher and make some food!</h2>
      <div className="button-input">
        <InputGroup className="mb-3">
          <FormControl
            className="FormControl"
            placeholder="Search for recipe's here!"
            aria-label="Meal Search Input"
            aria-describedby="meal-search-btn"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button
            className="btn btn-danger"
            id="meal-search-btn"
            onClick={handleSearch}
          >
            Bash for your recipes!
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

export default Feature;
