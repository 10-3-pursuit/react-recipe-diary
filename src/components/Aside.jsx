const Aside = (props) => {
  return(
  <aside>
    <h2>{props.name.firstName}'s Lists:</h2>

    <h3>Vegeterian</h3>
    <ul>
    {props.recipes.map((recipe) => {
          return recipe.isVegetarian ? 
            <li key={recipe.id}>{recipe.title}</li>
           : null;
        })}
    </ul>

    <h3>Non-Vegetarian</h3>
    <ul>
      {props.recipes.map((recipe) => {
        return !recipe.isVegetarian ? (
          <li key={recipe.id}>{recipe.title}</li>)
          :null;
      })}
    </ul>

    <h3>40 Minutes or Less</h3>
    <ul>
      {props.recipes.map((recipe) => (
        recipe.minutesToCook >= 40 ? <li key={recipe.id}>{recipe.title}</li>: null
      ))}
    </ul>
  </aside>
)};

export default Aside;
