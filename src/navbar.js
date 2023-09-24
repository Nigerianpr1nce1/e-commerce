import "./index.css";
const NavBar = () => {
  return (
    <>
      <nav>
        <div className="navbar">
          <h1 className="logo">Logo</h1>
          <div className="navlinks">
            <ul>
              <li>Home</li>
              <li>Shop</li> 
              <li>Socials</li>
            </ul>
          </div>
          <div className="navbuttons">
            <h3>Sign In</h3>
            <h3>Create Account</h3>
          </div>
        </div>
        <div className="nav-sect"></div>
      </nav>
    </>
  );
};

export default NavBar;
