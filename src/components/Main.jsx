const Main = (props) => {
  return <main>
    <h2>All Recipes</h2>
    <ul>{props.recipes.map((recipe) =>
      <li key={recipe.id}>
        <h4>{recipe.title}</h4>
        <p>{recipe.summary}</p>
        <p>Recipe created by chef {recipe.chef}</p>
        <p>Year Created: {recipe.yearCreated}</p>
        <span>Preparation Time: {recipe.minutesToCook} minutes</span>
      </li>)}
    </ul>
  </main>;
};

export default Main;
