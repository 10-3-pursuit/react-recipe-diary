
function ListItem({recipe}) {
  return (
    <div key={recipe.id}>
        <h4>{recipe.title}</h4>
        <p>{recipe.summary}</p>
        <span>Minutes to Cook: {recipe.minutesToCook}</span>
        <br />
        <br />
    </div>
  )
};

export default ListItem