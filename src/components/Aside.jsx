const Aside = ({name, recipes}) => {
  return <div>
    <h2>{name.firstName}'s Lists</h2>
    <h3>Vegetarian</h3>
    <ul>
      {recipes.map(recipe => {
        if (recipe.isVegetarian){
          return <li key={recipe.id}>{recipe.title}</li>
        }
      })}
    </ul>
    <h3>Non-Vegetarian</h3>
    <ul>
    {recipes.map(recipe => {
        if (recipe.notVegetarian){
          return <li key={recipe.id}>{recipe.title}</li>
        }
        })}
          </ul>
          
  </div>;
};

export default Aside;
