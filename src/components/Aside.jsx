const Aside = ({name, recipes}) => {
  return <aside>

  <h2>{name.firstName}'s Lists </h2> 
    <h3>Vegetarian</h3>
      <ul>
        {recipes.map(recipe=> recipe.isVegetarian && <li key={recipe.id} >{recipe.title}</li>)}
        </ul>
      <h3>Non-Vegetarian</h3>
      <ul>
        {recipes.map(recipe =>!recipe.isVegetarian && <li key={recipe.id}>{recipe.title}</li>)}
        <li></li>
      </ul>

    </aside>
};

export default Aside;
