const Header = ({name}) => {
  const fullName = `${name.firstName} ${name.lastName}`
  return <header>
    <h1>{fullName}'s Recipe Diary</h1>
  </header>
  
};

export default Header;
