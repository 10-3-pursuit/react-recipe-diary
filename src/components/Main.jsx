import ListItem from "./ListItem";

const Main = ({recipes,headImage}) => {
  return (
  <main>
    <h2><img src={headImage}></img></h2>
    <ul>
    {recipes.map(recipe=>{
      return <ListItem key={recipe.id} recipe={recipe}/>
  })}
    </ul>
  </main>
  )
};

export default Main;
