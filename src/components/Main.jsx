import ListItem from "./ListItem";
import AllRecipes from "../images/allRecipes.png"

const Main = ({recipes}) => {
  return (
    <main>
      <h2><img src={AllRecipes} alt="All Recipes" /></h2><br />
      {recipes.map((recipe) => (
        <ListItem key ={recipe.id} recipe={recipe}/>
      ))}
    </main>
  );
};

export default Main;
