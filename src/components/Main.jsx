import ListItem from "./ListItem";

const Main = ({recipes}) => {
  return (
  <main>
    <img src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0" alt="Different foods" />
    <ul>
    {recipes.map(recipe => <ListItem recipe={recipe}/>)}
    </ul>
  </main>
  )
}

export default Main;
