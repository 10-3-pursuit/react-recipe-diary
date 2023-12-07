const Main = ({recipes}) => {
  return <main>
    <h2>All Recipes</h2>
    <ul>
    {recipes.map((recipe) => (
      <li key={recipe.id}>
        <h4>{recipe.title}</h4>
        <p>{recipe.summary}</p>
        <span>Minutes:{recipe.minutesToCook}</span> 
    </li>))}
    </ul>
  </main>;
};

export default Main;
