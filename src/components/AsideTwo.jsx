function calculateAverageCookingTime (recipes) {
    return recipes.reduce((acc, curr) => acc + curr.minutesToCook, 0) / recipes.length;
}

function calculateChefRecipes (recipes) {
    return recipes.reduce((acc, curr) => {
        const chef = curr.chef;
        if (Object.keys(acc).includes(chef)) {
            acc[chef].recipes++;
        } else {
            acc[chef] = {"recipes": 1, "key": curr.id};
        }
        return acc;
    }, {});
}

const AsideTwo = ({ recipes }) => {
    const averageCookingTime = calculateAverageCookingTime(recipes).toFixed(0);
    const chefsAndRecipesObj = calculateChefRecipes(recipes);
    const chefsAndRecipesList = [];
    for (const chef in chefsAndRecipesObj) {
        chefsAndRecipesList.push(
            <li key={chefsAndRecipesObj[chef].key}>Chef: {chef}, Number of Recipes: {chefsAndRecipesObj[chef].recipes}</li>
        )
    }
    return (
        <aside className="aside-two">
            <p>Average Cooking Time of All Recipes: {averageCookingTime} minutes</p>
            <ul>{chefsAndRecipesList}</ul>
        </aside>
    )
}

export default AsideTwo;