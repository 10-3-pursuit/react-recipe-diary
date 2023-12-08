const Header = (props) => {
const { firstName, lastName } = props.name
  return <header>{firstName} {lastName} 's Recipe Diary</header>;
};

export default Header;
