import logo from "../assets/nba-logo.png"

const Header = () => {
  return (
    <div className="logoandtext">
      <p>
        <img src={logo} alt="" />
      </p>
      <h1 >NBA Legends</h1>
      <input type="search" name="" id="" placeholder="Search Player..."/>
    </div>
  );
};

export default Header;
