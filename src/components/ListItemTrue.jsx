

const ListItemTrue = ({recipe}) => {
  return <li>
        {recipe.isVegetarian ? recipe.title : null}
    </li>

}

export default ListItemTrue