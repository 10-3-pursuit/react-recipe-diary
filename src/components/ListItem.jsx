

const ListItem = ( props ) => {
    const {recipe} = props;
  return (
    <li key={recipe.id}>
        <h4>{recipe.title}</h4>
        <p>{recipe.summary}</p>
        <span>Preparation Time: {recipe.minutesToCook} minutes</span>
    </li>
   
  )
}

export default ListItem
