const Main = ({recipes}) => {

  return (
    <main>
      <h2>"All Descriptions"</h2>
      <ul>
       {recipes.map((food) => 
        <li key={food.id}>
          <h4>{food.title}</h4>
          <p>{food.summary}</p>
          <span>Preparation Time: {food.minutesToCook} minutes</span>
        </li>
        )}
      </ul>
    </main>
    );
};

export default Main;
