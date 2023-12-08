const Aside = ({name, recipes}) => {
  return <aside>
    <h2>{name.firstName}'s Lists</h2>
    <h3>Vegetarian</h3>
    <ul>{recipes.map((recipe) => (recipe.isVegetarian ? <li key={recipes.isVegetarian}>{recipe.isVegetarian}</li> : null))}</ul>
    {/* non vegetarian */}
    <li></li>
  </aside>;
};
export default Aside;
