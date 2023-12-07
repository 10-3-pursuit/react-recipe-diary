const Aside = (props) => {
  return (
    <aside>
      <h2>{props.name.firstName}'s Lists</h2>
      <div>
        <h3>Vegetarian</h3>
        <ul>
          {props.recipes.filter((recipe) => recipe.isVegetarian).map((recipe) => (
              <li key={recipe.id}>{recipe.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Non-Vegetarian</h3>
        <ul>
          {props.recipes.filter((recipe) => !recipe.isVegetarian).map((recipe) => (
              <li key={recipe.id}>{recipe.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>40 Minutes or less</h3>
        <ul>
          {props.recipes.filter((recipe) => recipe.minutesToCook <=40).map((recipe) => (
              <li key={recipe.id}>{recipe.title}</li>
          ))}
        </ul>
      </div>
    </aside>
  )
};

export default Aside;
