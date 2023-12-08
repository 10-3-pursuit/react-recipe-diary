const Aside = ({name, data}) => {
  return (
    <aside>
      <h2>{name.firstName}'s  Lists: </h2>
      <h3>Vegetarian</h3>
      <ul>{data.filter((recipe) => recipe.isVegetarian).map((recipe) =>( <li key={recipe.id}>{recipe.title}</li> 
      ))}</ul>
      
      <h3>Non-Vegetarian</h3>
      <ul>{data.filter((recipe) => !recipe.isVegetarian).map((recipe)=>( <li key={recipe.id}>{recipe.title}</li>
     ))}</ul>

      <h3>40 minutes or less</h3>
      <ul>{data.filter((recipe) => recipe.minutesToCook && recipe.minutesToCook <= 40).map((recipe)=>(<li key={recipe.id}>{recipe.title}</li>
      ))}</ul>
    </aside>
  );
};

export default Aside;
