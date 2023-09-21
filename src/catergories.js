import './index.css'
import { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGreaterThan} from '@fortawesome/free-solid-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
const Categories = () => {
    const [isClothesActive , setIsClothesActive] = useState(false)
    const [clothesArrow,setClothesArrow] = useState(faGreaterThan)
    const [isWomenActive ,setIsWomenActive] = useState(false)
    const [isMenActive ,setIsMenActive] = useState(false)
    const [isKidsActive ,setIsKidsActive] = useState(false)
    const [womanArrow,setwomanArrow] = useState(faGreaterThan)
    const [manArrow,setmanArrow] = useState(faGreaterThan)
    const [kidsArrow,setKidsArrow] = useState(faGreaterThan)

    const clickClothes = (e) =>{
      setIsClothesActive(current => !current)
      if (clothesArrow === faGreaterThan){
        setClothesArrow (faChevronDown)}
      else {
        setClothesArrow (faGreaterThan)
        }
    }

    const toggleWomenHidden = (e) =>{
        setIsWomenActive(current => !current)
        if (setIsMenActive(false)) {
          setIsMenActive((current) => !current);
        }
        if (setIsKidsActive(false)) {
          setIsKidsActive((current) => !current);
        }
        
        if (womanArrow === faGreaterThan){
        setwomanArrow (faChevronDown)
        }
        else{
          setwomanArrow (faGreaterThan)
          }
    }
    const toggleMenHidden =(e) =>{
        setIsMenActive(current => !current)
        if (setIsWomenActive(false)) {
          setIsWomenActive((current) => !current);
        }
        if (setIsKidsActive(false)) {
          setIsKidsActive((current) => !current);
        }
        if (manArrow === faGreaterThan){
          setmanArrow (faChevronDown)
          }
           else {
            setmanArrow (faGreaterThan)
            }

    }
    const toggleKidsHidden = (e) => {
        setIsKidsActive(current => !current)
        if (setIsWomenActive(false)) {
          setIsWomenActive((current) => !current);
        }
        if (setIsMenActive(false)) {
          setIsMenActive((current) => !current);
        }
        if (kidsArrow === faGreaterThan){
          setKidsArrow (faChevronDown)
          }
          else {
            setKidsArrow (faGreaterThan)
            }

    }

    return ( <>
    <div className="categories">
      <div className="cosmetics">
        
      </div>
      <div className="clothes">
        <p onClick={clickClothes}> <FontAwesomeIcon icon={clothesArrow} className = 'fontarrow' />  CLOTHES</p>
        {isClothesActive &&
        <>
                <p onClick={toggleWomenHidden}><FontAwesomeIcon icon={womanArrow} className = 'fontarrow' /> Women</p>
        {isWomenActive && 
                        <ul  className='Women'>
                            <li> Shirt</li>
                            <li> Sweaters</li>
                            <li> Shorts</li>
                            <li> Hoodies</li>
                            <li> Trousers</li>
                            <li> Footwear</li>
                            <li> Sleepwear</li>
                            <li> Accessories</li>
                        </ul>}
                <p onClick={toggleMenHidden}><FontAwesomeIcon icon={manArrow} className = 'fontarrow' /> Men</p>
                {isMenActive && 
                        <ul  className='Men'>
                            <li> Shirt</li>
                            <li> Sweaters</li>
                            <li> Shorts</li>
                            <li> Hoodies</li>
                            <li> Trousers</li>
                            <li> Footwear</li>
                            <li> Sleepwear</li>
                            <li> Accessories</li>
                        </ul>}
        
                <p onClick={toggleKidsHidden}> <FontAwesomeIcon icon={kidsArrow} className = 'fontarrow' /> Kids</p>
                <ul className='kids'>
                {isKidsActive && 
                        <ul>
                            <li> Shirt</li>
                            <li> Sweaters</li>
                            <li> Shorts</li>
                            <li> Hoodies</li>
                            <li> Trousers</li>
                            <li> Footwear</li>
                            <li> Sleepwear</li>
                            <li> Accessories</li>
                        </ul>}
                </ul>
                </>
}
        </div>
    </div>
    </> );
}

export default Categories;