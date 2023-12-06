import ListItem from "./ListItem";
import comfort from "../images/comfort.jpg";
const Main = (props) => {
  return (
    <main>
      {/* <h2>All Recipes</h2> */}
      <img src={comfort} alt="comfort" />
      <ul>
        {props.recipes.map((recipe) => (
          <ListItem recipe={recipe} key={recipe.id} />
        ))}
      </ul>
    </main>
  );
};

export default Main;
