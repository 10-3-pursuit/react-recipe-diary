const Header = (props) => {
  const {name} = props;
  return (
    <header>
      <h1>{name.firstName}'s Recipe Diary</h1>
    </header>
  );
};

export default Header;


// // - Pass a name object as a prop from the App component to the Header 
// Component. // - In an `h1` tag, use the name prop for the first name in 
// your Header and append hard-coded text to - indicate it's 
// your Recipe Diary (e.g., "JD’s Recipe Diary").