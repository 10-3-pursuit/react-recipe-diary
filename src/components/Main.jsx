
import ListItem from "./ListItem";

const Main = () => {
  return <div>Main</div>;
};


const MainWithRecipes = ({ recipes }) => {
  return (
    <main>
      <h2>All Descriptions</h2>
      <ul>
        {recipes.map((recipe) => {
          return (
            <li key={recipe.id}>
              <h4>{recipe.title}</h4>
              <p>{recipe.summary}</p>
              <span>Preparation Time: {recipe.minutesToCook}</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default MainWithRecipes;
