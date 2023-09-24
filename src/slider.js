import './index.css'
import a from './y.jpg'
import b from './ytu.jpg'
import c from './zx.jpg'
import { useState } from 'react';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Slider = () => {
    const [showImg,setShowImg] = useState(0)
    const array = [a,b,c]
    const sliderPrev = () => {
        setShowImg((prevIndex) => prevIndex === 0 ? array.length - 1 : prevIndex -1
        )
    }
    const sliderNext = () => {
        setShowImg((prevIndex) => prevIndex === array.length - 1 ? 0 : prevIndex + 1
        )
    }
    return ( 
        <>
        <div className="sliderContainer">
            <div className="slider">
                
            <button onClick={sliderPrev} type="button" class="left"><FontAwesomeIcon icon={faLessThan}/></button>
        <img src={array[showImg]} alt="" />
            <button onClick={sliderNext} type="button" class="right"><FontAwesomeIcon icon={faGreaterThan}/></button>
            </div>            {
                
            }
        </div>        
        </>
     );
}
 
export default Slider;