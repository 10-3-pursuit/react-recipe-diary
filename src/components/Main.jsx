import ListItem from './ListItem'

const Main = (props) => {
  return (
    <main>
      <h2>All Recipes</h2>
      <ul>
        {props.recipes.map((recipe) => (
          <ListItem
            key= {recipe.id}
            title={recipe.title}
            summary ={recipe.summary}
            minutesToCook={recipe.minutesToCook} 
          />
        ))}
      </ul>
    </main>
  )
};

export default Main;
