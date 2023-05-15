import React from "react";
import { useParams, Link } from "react-router-dom";
import { Grid, CardCuisine } from "../components/Styled";

const Searched = () => {
  const [searched, setSearched] = React.useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearched(recipes.results);
  };

  React.useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searched.map((item) => (
        <CardCuisine key={item.id}>
          <Link to={`/recipe/${item.id}`}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Link>
        </CardCuisine>
      ))}
    </Grid>
  );
};

export default Searched;
