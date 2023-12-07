import ListItemTrue from "./ListItemTrue";
import ListItemFalse from "./ListItemFalse";
import ListItem40Mins from "./ListItem40Mins";

const Aside = ({name, recipes}) => {
  return <aside>
    <h2>{name.firstName}'s Lists</h2>
    <h3>Vegetarian</h3>
    <ul>
    {recipes.map((recipe) => {
      return <ListItemTrue key={recipe.id} recipe={recipe} />
      })}
    </ul>
    <h3>Non-Vegetarian</h3>
    <ul>
    {recipes.map((recipe) => {
      return <ListItemFalse key={recipe.id} recipe={recipe} />
      })}
    </ul>
    <h3>40 minutes or less</h3>
    <ul>
      {recipes.map((recipe) => {
        return <ListItem40Mins key={recipe.id} recipe={recipe} />
      })}
    </ul>
  </aside>
};

export default Aside;
