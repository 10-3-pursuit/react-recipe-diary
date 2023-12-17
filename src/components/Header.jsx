const Header = ({ nameObj }) => {
  return (
    <div>
      Header
      <h1>
        {nameObj.firstName} {nameObj.lastName}'s recipe diary'
      </h1>
    </div>
  );
};

export default Header;
