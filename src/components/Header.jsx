const Header = (props) => {
  return (
    <header>
      <h1>{props.name.firstName} {props.name.lastName} 's Recipe Diary</h1>
    </header>
  );
};

export default Header;
