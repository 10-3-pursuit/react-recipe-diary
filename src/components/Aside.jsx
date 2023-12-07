const Aside = ({ name, recipes }) => {
  const fastestRecipes = recipes.filter(recipe => recipe.minutesToCook <= 40);

  return <aside>
    <h2>{name.firstName}'s Lists</h2>
    <h3>Vegetarian</h3>
    <ul>
      {recipes.filter(recipe => recipe.isVegetarian).map(recipe => <li key={recipe.id}>
        {recipe.title}
      </li>)}
    </ul>
    <h3>Non-Vegetarian</h3>
    <ul>
    {recipes.filter(recipe => !recipe.isVegetarian).map(recipe => <li key={recipe.id}>
        {recipe.title}
      </li>)}
    </ul>
    <h3>40 Minutes or less</h3>
    <ul>
      {fastestRecipes.map(recipe => <li key={recipe.id}>{recipe.title}</li>)}
    </ul>
  </aside>;
};

export default Aside;
