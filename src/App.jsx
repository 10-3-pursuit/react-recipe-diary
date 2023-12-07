import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";

import recipes from "./data/data.json";

// import the css
import "./App.css";

const name = {
  firstName: "Jennifer",
  lastName: "Peterson",
};

const allRecipesSorted = recipes.sort((a, b) => a.title.localeCompare(b.title));
// console.log(allRecipesSorted);

const App = () => {
  return (
    <div>
      <Header name={name} />
      <div className="container">
        <Aside name={"Jennifer"} recipes={recipes} />
        <Main recipes={allRecipesSorted} />
      </div>
    </div>
  );
};

export default App;
