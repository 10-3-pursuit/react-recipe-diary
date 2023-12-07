import ListItem from "./ListItem";

// pass the data
const Main = ({ recipes }) => {
  // console.log({ recipes });

  return (
    <main>
      <h2>All Descriptions</h2>
      <ul>
        {recipes.map((recipe) => (
          <ListItem key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </main>
  );
};

export default Main;
