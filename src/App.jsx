import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";

import recipes from "./data/data.json";

import "./App.css";

const name = {
  firstName: "JD",
  lastName: "Richards"
};

const sortedRecipes = recipes.sort((a, b) => a.title.localeCompare(b.title));

const App = () => {
  return (
    <div>
      <Header name={name} />
      <div className="container">
        <Aside name={name} recipes={recipes} />
        <Main recipes={sortedRecipes} />
      </div>
    </div>
  );
};

export default App;
