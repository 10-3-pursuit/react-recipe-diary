const Aside = ({name,recipes}) => {
  return (
  <aside>
    <h2>{name.firstName}'s Lists</h2>
    <h3>Vegetarian</h3>
    <ul>
      {recipes.map(recipe=> recipe.isVegetarian ? <li key={recipe.id}>{recipe.title}</li>:null)}
    </ul>
    <h3>Non-Vegetarian</h3>
    <ul>
      {recipes.map(recipe=> !recipe.isVegetarian ? <li key={recipe.id}>{recipe.title}</li>:null)}
    </ul>
    <ul>
      <h3>40 Minutes or Less</h3>
      {recipes.map(recipe=> recipe.minutesToCook <= 40 ? <li key={recipe.id}>{recipe.title}</li>:null)}
    </ul>
  </aside>
  )
};

export default Aside;
