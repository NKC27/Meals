import Jumbotron from "../../Jumbotron/Jumbotron";
// import Navbar from "../../Navbar/Navbar";
import "./home.css";
import axios from "axios";
import { useEffect, useContext } from "react";
import Meals from "../../Meals/Meals";
import { MyContext } from "../../../context";

const Home = () => {
  const { meals, setMeals } = useContext(MyContext);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=Apple")
      .then(({ data }) => setMeals(data.meals))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <Jumbotron />
      <Meals meals={meals} />
    </div>
  );
};

export default Home;
