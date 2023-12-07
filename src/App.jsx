import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";
import './App.css'

import recipes from "./data/data.json";

const name = {
  firstName: "Brenda",
  lastName: "Soto"
};

const App = () => {
  const sortedRecipes = recipes.sort((a, b) => a.title.localeCompare(b.title))
  return (
    <div>
      <Header name={name}/>
      <div className="container">
        <Aside name={name} recipes={sortedRecipes}/>
        <Main recipes={sortedRecipes} />
      </div>
    </div>
  );
};

export default App;
