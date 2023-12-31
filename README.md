<img src="./src/images/comfort.jpg" width="250" height="400">

# ReactJS Recipe Diary

#### This is an exercise in passing props to components, making lists, and making calculations.

**INSTRUCTIONS:**

`fork` and `clone` this repo.

Refer to the image below

<img src="./src/images/browser.png" width="700" height="500">

### Header Component:

- Pass a name object as a prop from the App component to the Header Component.
- In an `h1` tag, use the name prop for the first name in your Header and append hard-coded text to - indicate it's your Recipe Diary (e.g., "JD’s Recipe Diary").

### Aside Component:

- Pass both the name object and the recipes array as props to the Aside component.
- Using your name props, create an `<h2>` tag displaying the first name with an apostrophe 's' and the word Lists (e.g., "JD’s Lists").
- Add two `<h3>` tags: one labeled ‘Vegetarian’ and the other ‘Non-Vegetarian’.
- Under each `<h3>` tag, create an unordered list.
- In each list, using `<li>s` display the relevant recipes based on the isVegetarian key from the data.
- Use the id as the key when you map through the list

### Main Component:

- Add an `<h2>` tag titled ‘All Descriptions’.
- List all of the recipes: (see the image above)
  - Use an `<h4>` tag for the title.
  - Use a `<p>` tag for the summart.
  - Use a `<span>` tag for displaying the minutes. (see image above)

## Bonus Challenges:

1.  Create a `ListItem` component for the `<li>` element and utilize it in Main.js when mapping through the recipes.

1.  Sort the recipes alphabetically in the App.jsx component by title and send that sorted array as props to the Main.jsx component.

1.  Use this sorted array prop, instead of the original array, to list the recipes alphabetically by title.

1.  In the Aside component, create another list showcasing the fastest recipes (those that take 40 minutes or less to cook). Give it a title of 40 minutes or less. (see image above)

1.  Replace the "All Recipes" header with an image of your choice. You can add this image to your directory or use an external link (with 'http'). (see image below)

1.  Consider additional features or information you could incorporate into this app.

1.  Create a new Component that sits as an `<aside>` on the right side of the `<Main/>` component.

    - adjust the CSS so that it now uses 3 columns instead of two

    - this new aside should be the same width as the one on the left.

    - Compute the average cooking time of all the recipes. Use a helper function to calculate the average based on the minutesToCook property from each recipe.

    - Create a function that calculates the total number of recipes each chef has contributed.

    - Present these counts in a list format, showing each chef's name alongside the number of recipes they've contributed.
