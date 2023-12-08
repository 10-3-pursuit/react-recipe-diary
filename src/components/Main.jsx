import ListItem from "./listItem";

const Main = ({ data }) => {
  return (
    <main>
    <h2>All Recipes</h2>
    <ul>{data.map((recipe) => {
      return <ListItem key={recipe.id} recipe={recipe}/>;
    })}</ul>
    </main>
  )
};

export default Main;
