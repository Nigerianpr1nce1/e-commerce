import "./index.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
const Categories = () => {
  const [isWomenActive, setIsWomenActive] = useState(true);
  const [isMenActive, setIsMenActive] = useState(true);
  const [isKidsActive, setIsKidsActive] = useState(true);
  let arrow = faGreaterThan;

  if ((arrow = "faGreaterThan")) {
    const newLocal = arrow = "faLessThan";
  }

  const handleWomenClick = (e) => {
  setIsWomenActive((current) => !current);

  };
  if (setIsMenActive(false)) {
    setIsMenActive((current) => !current);
  }
  if (setIsKidsActive(false)) {
    setIsKidsActive((current) => !current);
  }
  const toHandleArrow = () => {
  };
  const toggleMenHidden = (e) => {
    setIsMenActive((current) => !current);
    if (setIsWomenActive(false)) {
      setIsWomenActive((current) => !current);
    }
    if (setIsKidsActive(false)) {
      setIsKidsActive((current) => !current);
    }
  };
  const toggleKidsHidden = (e) => {
    setIsKidsActive((current) => !current);
    if (setIsWomenActive(false)) {
      setIsWomenActive((current) => !current);
    }
    if (setIsMenActive(false)) {
      setIsMenActive((current) => !current);
    }
  }

  return (
    <>
      <div className="categories">
        <div className="phones"></div>
        <div className="makeup"></div>
        <p onClick={handleWomenClick}>
          
          <FontAwesomeIcon icon={arrow} className="fontarrow" />
          Women
        </p>
        {isWomenActive && (
          <ul className="Women">
            <li>
              {" "}
              <FontAwesomeIcon icon={arrow} className="fontarrow" /> Shirt
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
              Sweaters
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
              Shorts
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
              Hoodies
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
              Trousers
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
              Footwear
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
              Sleeepwear
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
              Accesories
            </li>
          </ul>
        )}
        <p onClick={toggleMenHidden}>
          <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
          Men
        </p>
        {isMenActive && (
          <ul className="Men">
            <li>
              {" "}
              <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
              Shirt
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
              Sweaters
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
              Shorts
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
              Hoodies
            </li>
            <li>
              {" "}
              <FontAwesomeIcon
                icon={faGreaterThan}
                className="fontarrow"
              />{" "}
              Trousers
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
              Footwear
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
              Sleeepwear
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
              Accesories
            </li>
          </ul>
        )}

        <p onClick={toggleKidsHidden}>Kids</p>
        <ul className="kids">
          {isKidsActive && (
            <ul>
              <li>
                {" "}
                <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
                Shirt
              </li>
              <li>
                <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
                Sweaters
              </li>
              <li>
                <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
                Shorts
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
                Hoodies
              </li>
              <li>
                <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
                Trousers
              </li>
              <li>
                <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
                Footwear
              </li>
              <li>
                <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
                Sleeepwear
              </li>
              <li>
                <FontAwesomeIcon icon={faGreaterThan} className="fontarrow" />
                Accesories
              </li>
            </ul>
          )}
        </ul>
      </div>
    </>
  );
};
export default Categories;
