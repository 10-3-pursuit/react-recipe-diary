

const ListItem40Mins = ({recipe}) => {
  return <li>
    {recipe.minutesToCook <= 40 ? recipe.title : null}
  </li>
}

export default ListItem40Mins