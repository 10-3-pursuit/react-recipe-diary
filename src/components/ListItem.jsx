

const ListItem = ({sortedRecipe}) => {
    return <li>
        <h4>{sortedRecipe.title}</h4>
        <p>{sortedRecipe.summary}</p>
        <span>Preparation time: {sortedRecipe.minutesToCook} minutes</span>
      </li>
  }
  export default ListItem