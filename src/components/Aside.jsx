const Aside = ({name, recipes}) => {
  const vegetarian = recipes.filter((recipe) => 
  recipe.isVegetarian === true).map((food) => 
  <li key={food.id}> {food.title} </li>)
  const nonVegetarian = recipes.filter((recipe) => 
  recipe.isVegetarian === false).map((food) => 
  <li key={food.id}> {food.title} </li>)
  return (
    <div>
      <h2>{name.firstName}'s Lists</h2>
      <h3>Vegetarian</h3>
        <ul>
          {vegetarian}
        </ul>
      <h3>Non-Vegetarian</h3>
        <ul>
          {nonVegetarian}
        </ul>
    </div>
  );
};

export default Aside;