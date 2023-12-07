const Aside = ({name, recipes}) => {
  return <aside>
    <h2>{name.firstName}'s List</h2>
    <div>
      <h3>
        Vegetarian
      </h3>
      <ul>
        {recipes.filter((recipe) => recipe.isVegetarian).map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
    <div>
      <h3>
        Non-Vegetarian
      </h3>
      <ul>
        {recipes.filter((recipe) => !recipe.isVegetarian).map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
    <div>
      <h3>
        40 Minutes or less
      </h3>
      <ul>
        {recipes.map((recipe) => recipe.minutesToCook <= 40 ? <li key={recipe.id}>{recipe.title}</li>:null)}
      </ul>
    </div>
  </aside>;
};

export default Aside;
