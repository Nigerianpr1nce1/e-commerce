import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import { faUserPlus,faCartShopping, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  return (
    <>
      <nav>
        <div className="navbar">
          <h1 className="logo">Logo</h1>
          <h1 className="name">Name</h1>
          <div className="navbuttons">
            <h3 className="navicon"> <FontAwesomeIcon icon={faRightToBracket}/> </h3>
            <h3 className="navicon"> <FontAwesomeIcon icon={faUserPlus}/> </h3>
            <h3 className="navicon"> <FontAwesomeIcon icon={faCartShopping}/></h3>
          </div>
        </div>
        <div className="nav-sect"></div>
      </nav>
    </>
  );
};

export default NavBar;
