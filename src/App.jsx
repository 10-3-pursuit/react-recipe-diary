import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css"

import recipes from "./data/data.json";

const name = {
  firstName: "Jen",
  lastName: "Jones"
};

const App = () => {
  return (
    <div>
      <Header name={name} /> 
      {/* props that is being passed to the header component */}
      <div className="container">
        <Aside recipes={recipes} name={name}/>
        <Main />
      </div>
    </div>
  );
};

export default App;

