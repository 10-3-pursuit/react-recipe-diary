const ListItem = (props) => {
const {title, summary, minutesToCook } = props
  return (
    <li>
        <h4>{title}</h4>
        <p>{summary}</p>
        <span>Preperation Time: {minutesToCook} Minutes</span>
    </li>
  )
}

export default ListItem;