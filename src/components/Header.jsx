const Header = ( props ) => {
  const { name } = props
  return <header>
    <h1>{name.firstName}'s Recipe Diary</h1>
  </header>;
};

export default Header;

// ---- Notes: Alt ways to write same component aka function ----

// Format 1 
/*const Header = ( props ) => {
  return <header>
    <h1>{props.name.firstName}'s Recipe Diary</h1>
  </header>;
};

export default Header;

--- Format 2
const Header = ( {name} ) => {
  return <header>
    <h1>{name.firstName}'s Recipe Diary</h1>
  </header>;
};

export default Header;
*/