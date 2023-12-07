const Aside = (props) => {
  return (
  <aside>
    <h2>{props.name.firstName}' List:</h2>
    <h3>Vegetarian</h3>
    <ul>
    {props.recipes.map((recipe) => (recipe.isVegetarian === true) && <li key= {recipe.id}>{recipe.title}</li>)}
    </ul>
    <h3>Non-Vegetarian</h3>
    <ul>
    {props.recipes.map((recipe) => (recipe.isVegetarian === false) && <li key= {recipe.id}>{recipe.title}</li>)}
    </ul>
    <h3>40 Minutes or Less</h3>
    <ul>
    {props.recipes.map((recipe) => {
      if (recipe.minutesToCook <= 40)
      return <li key= {recipe.id}>{recipe.title}</li>
    })}
    </ul>

  </aside>
  )
};

export default Aside;
