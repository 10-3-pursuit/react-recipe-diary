const Aside = ({ name, recipes }) => {
  //to use for a seperate list component
  // const vegetarian = recipes.filter((recipe) => recipe.isVegetarian);
  // const nonVegetarian = recipes.filter((recipe) => !recipe.isVegetarian);
  return (
    <aside>
      <h2>{name.firstName}'s Lists</h2>
      <h3>Vegetarian</h3>
      <ul>
        {recipes.map((recipe) => {
          return (
            <li key={recipe.id}>{recipe.isVegetarian && recipe.title}</li>
          );
        })}
      </ul>
      <h3>Non-Vegetarian</h3>
      <ul>
        {recipes.map((recipe) => {
          return (
            <li key={recipe.id}>{!recipe.isVegetarian && recipe.title}</li>
          );
        })}
      </ul>
      <h3>40 Minutes or Less</h3>
      <ul>
        {recipes.filter(recipe => recipe.minutesToCook <= 40).map((quickRecipe) => {
          return <li key={quickRecipe.id}>{quickRecipe.title}</li>
        })}
      </ul>
    </aside>
  );
};

export default Aside;
