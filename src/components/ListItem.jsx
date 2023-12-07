const ListItem = ({recipe}) => {
  return (
    <li>
        <h4>{recipe.title}</h4>
          <p>{recipe.summary}</p>
          <span>Preparation Time: {recipe.minutesToCook} minutes</span>
    </li>
  )
}

export default ListItem