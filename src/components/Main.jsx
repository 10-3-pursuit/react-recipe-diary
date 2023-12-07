const Main = (props) => {
  return( 
  <main>
    <h2>All Descriptions</h2>
    {props.recipes.map((recipe) => (
      <div key={recipe.id}>
        <br />
        <h4>{recipe.title}</h4>
        <p>{recipe.summary}</p>
        <span>{`Preparation Time: ${recipe.minutesToCook} minutes`}</span>
        <br />
      </div>
    ))}

  </main>
)};

export default Main;
