const Aside = ({name, recipes}) => {
  return (
    <aside>
    <h2>{name.firstName}'s Lists</h2>
    <h3>Vegetarian</h3>
    <ul>
      {recipes.map(recipe => {
        return <li key={recipe.title}>
          {recipe.isVegetarian === true ? recipe.title: null}
        </li>
      })}
    </ul>
    <h3>Non-Vegetarian</h3>
    <ul>
      {recipes.map(recipe => {
        return <li key={recipe.id}>
          {recipe.isVegetarian === false ? recipe.title: null}
        </li>
      })}
    </ul>
    <h3>40 minutes or less</h3>
    <ul>
      {recipes.map(recipe => {
        return <li key={recipe.id}>
          {recipe.minutesToCook <= 40 ? recipe.title : null}
        </li>
      })}
    </ul>
    </aside>
  )
};

export default Aside;
