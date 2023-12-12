import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";

import recipes from "./data/data.json";
import './App.css'

const name = {
  firstName: "Iris",
  lastName: "Beckham"
};

const App = () => {
  return (
    <div>
      <Header name={name} />
      <div className="container">
        <Aside name={name} recipes={recipes} />
        <Main recipes={recipes} />
      </div>
    </div>
  );
};

export default App;
