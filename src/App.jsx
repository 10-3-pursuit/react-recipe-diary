import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";
import './App.css'

//DATA
import recipes from "./data/data.json";

const name = {
  firstName: "Armando",
  lastName: "Pires"
};

const App = () => {
  return (
    <div>
      <Header name={name}/>
      <div className="container">
        <Aside name={name} recipes={recipes} />
        <Main recipes={recipes}/>
      </div>
    </div>
  );
};

export default App;
