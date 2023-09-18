import './index.css'
import { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGreaterThan} from '@fortawesome/free-solid-svg-icons'
const Categories = () => {
    const [isWomenActive ,setIsWomenActive] = useState(true)
    const [isMenActive ,setIsMenActive] = useState(true)
    const [isKidsActive ,setIsKidsActive] = useState(true)

    const toggleWomenHidden = (e) =>{
        setIsWomenActive(current => !current)
    }
    const toggleMenHidden =(e) =>{
        setIsMenActive(current => !current)

    }
    const toggleKidsHidden = (e) => {
        setIsKidsActive(current => !current)
        
    }
    
    return ( <>
    <div className="categories">
        <p onClick={toggleWomenHidden}>Women</p>
        {isWomenActive && 
                <ul  className='Women'>
                    <li> <FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' /> Shirt</li>
                    <li> <FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Sweaters</li>
                    <li> <FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Shorts</li>
                    <li> <FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Hoodies</li>
                    <li> <FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Trousers</li>
                    <li> <FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Footwear</li>
                    <li> <FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Sleeepwear</li>
                    <li> <FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Accesories</li>
                </ul>}
        <p onClick={toggleMenHidden}>Men</p>
        {isMenActive && 
                <ul  className='Men'>
                    <li> <FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Shirt</li>
                    <li> <FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Sweaters</li>
                    <li> <FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Shorts</li>
                    <li> <FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Hoodies</li>
                    <li> <FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Trousers</li>
                    <li> <FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Footwear</li>
                    <li> <FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Sleeepwear</li>
                    <li> <FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Accesories</li>
                </ul>}

        <p onClick={toggleKidsHidden}>Kids</p>
        <ul className='kids'>
        {isKidsActive && 
                <ul>
                    <li> <FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Shirt</li>
                    <li><FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Sweaters</li>
                    <li><FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Shorts</li>
                    <li> <FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Hoodies</li>
                    <li><FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Trousers</li>
                    <li><FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Footwear</li>
                    <li><FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Sleeepwear</li>
                    <li><FontAwesomeIcon icon={faGreaterThan} className = 'fontarrow' />Accesories</li>
                </ul>}
        </ul>
    </div>
    </> );
}
 
export default Categories;