const Aside = (props) => {
  const { name, recipes } = props;
  // console.log(recipes);
  const vegetarian = recipes
    .filter((recipe) => recipe.isVegetarian === true)
    .map((food) => <li key={food.id}>{food.title}</li>);
  // console.log(vegetarian);

  // create a variable for the non vegetarian recipes
  // filter the nonVegetarian recipes and then map them out
  // return the new list inside of a list item to append to the ul
  // include the key inside of the li's in the returns
  const nonVegetarian = recipes
    .filter((recipe) => recipe.isVegetarian === false)
    .map((food) => <li key={food.id}>{food.title}</li>);

  return (
    <aside>
      <h2>{name}'s List</h2>
      <h3>Vegetarian</h3>
      <ul>{vegetarian}</ul>
      <h3>Non-Vegetarian</h3>
      <ul>{nonVegetarian}</ul>
    </aside>
  );
};

export default Aside;
