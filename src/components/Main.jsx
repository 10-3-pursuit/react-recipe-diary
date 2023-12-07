import { ListItem } from "./ListItem";

const Main = ({recipes}) => {
  return (
    <main>
    <h2>All Descriptions</h2>
      <ul>
        {recipes.map(recipe => {
          return <ListItem key={recipe.id} recipe={recipe}/>
        })}
      </ul>
    </main>
  )
};

export default Main;
