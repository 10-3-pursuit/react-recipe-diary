const Header = ({ name }) => {
  const { firstName, lastName } = name;
  return (
    <header>
      <h1>
        {firstName} {lastName}'s Recipe Diary
      </h1>
    </header>
  );
};

export default Header;
