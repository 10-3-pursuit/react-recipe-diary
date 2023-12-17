const Main = ({ recipesArr }) => {
  return (
    <div>
      Main
      <h2>All Descriptions</h2>
      <ul>
        {recipesArr.map((recipe) => (
          <div>
            <h4>{recipe.title}</h4>
            <p>{recipe.summary}</p>
            <span>{recipe.minutesToCook}</span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Main;
