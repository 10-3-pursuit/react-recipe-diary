const Header = ({name}) => {
  const {firstName, lastName} = name
  return <div>
    <header>
      <h1>{firstName} {lastName}' Recipe Diary </h1>
      </header>
    </div>;
};

export default Header;
