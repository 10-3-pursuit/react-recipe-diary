import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";

import recipes from "./data/data.json";

const name = {
  firstName: "Add a string value with your First Name",
  lastName: "Add a string value with your Last Name"
};

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Aside />
        <Main />
      </div>
    </div>
  );
};

export default App;
