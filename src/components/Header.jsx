const Header = (props) => {
const { name } = props
  return <header>
    <h1> {name.firstName}'s Recipe Diary</h1>
    </header>;
};

export default Header;
