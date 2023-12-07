import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";
import AsideTwo from "./components/AsideTwo";

import recipes from "./data/data.json";

import "./App.css"

const name = {
  firstName: "Cristian",
  lastName: "Garcia"
};

const App = () => {
  const sortedRecipes = recipes.sort((a,b) => {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
      <Header name={name}/>
      <div className="container">
        <Aside name={name} recipes={recipes}/>
        <Main recipes={sortedRecipes} />
        <AsideTwo recipes={recipes}/>
      </div>
    </div>
  );
};

export default App;
