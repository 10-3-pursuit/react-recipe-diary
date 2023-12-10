const Main = ({recipes}) => {
  return (
    <main>
      <h2>All Descriptions</h2>
      {recipes.map(recipe => recipe.title ? (
        <ul>
          <h4>{recipe.title}</h4>
          <p>{recipe.summary}</p>
          <span>Preparation time: {recipe.minutesToCook} minutes</span>
        </ul>
      ) : null)}
    </main>
  );
};
export default Main;
