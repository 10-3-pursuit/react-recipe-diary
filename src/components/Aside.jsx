const Aside = ({name, recipes}) => {
//console.log(name)
  return <aside>
    <h2> {name.firstName}' Lists</h2>
    <h3>Vegetarian</h3>
    <ul>
      <h3>
        {recipes.map(recipe => recipe.isVegetarian ? <li key= {recipes.id}>{recipe.title}</li> : null)}
        <ul>
          <h3>Non-Vegetarian</h3>
          <ul>{recipes.map(recipe => 
            !recipe.isVegetarian ? null : <li key= {recipe.id}>{recipe.title}</li>)}
          </ul>
          <h3> 40 Minutes or Less</h3>
          <ul>{recipes.map(recipe => recipe.minutesToCook <= 40 && <li key={recipe.id}>{recipe.title}</li>)}</ul>
        </ul>
      </h3>
    </ul>
  </aside>
  }

export default Aside;
