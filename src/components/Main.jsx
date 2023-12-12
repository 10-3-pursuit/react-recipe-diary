const Main = ({ recipes }) => {
  return (
    <main>
      <h2>All Descriptions</h2>
      <ul>
        {recipes.map((recipe) => {
          return (
            <li key={recipe.id}>
              <h4>{recipe.title}</h4>
              <p>{recipe.summary}</p>
              <span>Preparation Time: {recipe.minutesToCook} minutes</span>
            </li>
          )
        })}
      </ul>
    </main>);
};

export default Main;
