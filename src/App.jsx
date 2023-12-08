import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css"
import recipes from "./data/data.json";

const name = {
  firstName: "Enoch",
  lastName: "Tagoe"
};

const App = () => {
  return (
    <div>
      <Header name={name} />
      <div className="container">
        <Aside />
        <Main />
      </div>
    </div>
  );
};

export default App;
