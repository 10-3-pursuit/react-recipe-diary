
const Main = ({recipes}) => {
  return (
    <main>
      <h2>All Descriptions</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h4>{recipe.title}</h4>
          <p>{recipe.summary}</p>
          <span>Minutes to Cook: {recipe.minutesToCook}</span>
        </div>
      ))}
    </main>
  );
};
export default Main;
