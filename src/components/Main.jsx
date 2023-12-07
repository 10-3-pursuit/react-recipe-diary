import ListItem from "./ListItem";

const Main = ({ recipes }) => {
  return <main>
    <h2>All Recipes</h2>
    {recipes.map(recipe => {
      return (
        <ListItem key={recipe.id} recipe={recipe}/>
      )
    })}
  </main>;
};

export default Main;
