const Aside = ({ nameObj, recipesArr }) => {
  return (
    <div>
      Aside
      <h2>{nameObj.firstName}'s List</h2>
      <h3>Vegitarian</h3>
      <ul>
        {recipesArr.map((recipe) => (
          <div key={recipe.id}>
            {recipe.isVegetarian === true && <li>{recipe.title}</li>}
          </div>
        ))}
      </ul>
      <h3>Non-Vegitarian</h3>
      <ul>
        {recipesArr.map((recipe) => (
          <div key={recipe.id}>
            {recipe.isVegetarian === false && <li>{recipe.title}</li>}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Aside;
