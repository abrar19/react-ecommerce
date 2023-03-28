import React, { useState } from 'react';
import './slider.scss'
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';


const Slider = () => {
    const photos = [
        {src : img1},
        {src : img2},
        {src : img3}
    ];

    const [slideNumber, setSlideNumber] = useState(0)
    const handleMove = (direction) => {
        let newSlideNumber;
        if(direction === 'left'){
            newSlideNumber = slideNumber === 0 ? 2 : slideNumber-1;
        }else{
            newSlideNumber = slideNumber === 2 ? 0: slideNumber+1;
        }

        setSlideNumber(newSlideNumber)
    }

    return (
        <div className='slider'>
            <div className="container">
                <img src={photos[slideNumber].src} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={()=>handleMove('left')}>
                    <WestOutlinedIcon/>
                </div>
                <div className="icon" onClick={()=>handleMove('right')}>
                    <EastOutlinedIcon/>
                </div>
            </div>
        </div>
    );
}

export default Slider;
