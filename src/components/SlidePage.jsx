import React from 'react';
import FinishButton from "./FinishButton";
import { useSlideContext } from './context/SlideContext';
import '../App.css';
import MenuModel from './MenuModal';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Finish from './Finish';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';


const SlidePage = () => {
  const { levelData, activeSlide, totalSlides, setActiveSlide,activeLevel } = useSlideContext();
  console.log(activeLevel)
  
  if (!levelData) {
    return (
      <Finish/>
      
    )
  }

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => Math.min(prevSlide + 1, totalSlides - 1));
  };

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  return (
    <>
     <div className='menu'>
         <h3>Current Level {activeLevel}</h3>
         <MenuModel/>
     </div>
    <div className="slide-page">
     
      
      <div className='image'>
        {
          console.log(`slide${activeSlide}`)
        }
        <img src={levelData.slide[activeSlide].src} alt={`Slide ${activeSlide + 1}`} />
      </div>

      <div className="slide-navigation">
        <Button
          variant="outlined"
          startIcon={<ArrowBackOutlinedIcon />}
          onClick={handlePrevSlide}
          disabled={activeSlide === 0}
        >
          Previous
        </Button>
        <span>
          {activeSlide + 1} / {totalSlides}
        </span>
        {activeSlide === totalSlides - 1 ? (
          <FinishButton />
        ) : (
          
          <Button 
          onClick={handleNextSlide}
          disabled={activeSlide === totalSlides - 1}
          variant="contained" endIcon={<SendIcon />}>
            Next
          </Button>
        )}
      </div>
    </div>
   </>
  );
   
    
};

export default SlidePage;
