

export const ListItem = ({recipe}) => {
  return (
    <li>
        <h4>{recipe.title}</h4>
        <p>{recipe.summary}</p>
        <span>Preparation Time: {recipe.minutesToCook}</span>
    </li>
  )
}
