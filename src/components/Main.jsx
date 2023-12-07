import ListItem from "./ListItem"
const Main = ({sortedRecipes}) => {
  return <main>
    <img src="https://assets3.thrillist.com/v1/image/3130793/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70" alt="Image of a variety of food." />
    <ul>
    {sortedRecipes.map((sortedRecipe) => {
      return <ListItem key={sortedRecipe.id} sortedRecipe={sortedRecipe} />
    })}

    </ul>
  </main>
};

export default Main;
