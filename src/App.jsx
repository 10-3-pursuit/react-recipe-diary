import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";
import recipes from "./data/data.json";
import "./App.css";

const name = {
  firstName: "Jazon",
  lastName: "Younge",
};

const App = () => {
  return (
    <div>
      <Header nameObj={name} />
      <div className="container">
        <Aside nameObj={name} recipesArr={recipes} />
        <Main recipesArr={recipes} />
      </div>
    </div>
  );
};

export default App;
