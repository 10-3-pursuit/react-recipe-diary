const Header = (props) => {
  const {name} = props
  console.log("Names:",name);
  return(
      <header>
        <h1>
          {name.firstName} {name.lastName}'s Recipe Diary
        </h1>
      </header>       
    );
};

export default Header;
