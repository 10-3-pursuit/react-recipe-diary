const Main = ({recipes}) => {
  return (<main>
    <h2>
      All descriptions
    </h2>
    {recipes.map(recipe => recipe.title)  }
    <ul>
      <h4>{recipe.title} ? (</h4>
      <p>recipe.summary</p>
      <span>Prparation Time {recipe.minutesToCook} minutes</span>
    </ul>
    )
    </main>
    );
    };


export default Main;
