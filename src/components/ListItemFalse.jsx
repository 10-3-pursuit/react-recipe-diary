
const ListItemFalse = ({recipe}) => {
    return <li>
    {recipe.isVegetarian ? null : recipe.title}
</li>
}

export default ListItemFalse