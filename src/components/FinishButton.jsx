import React from 'react';

import { useSlideContext } from './context/SlideContext';

const FinishButton = () => {
  const { setActiveLevel, setActiveSlide } = useSlideContext();

  const handleFinishLevel = () => {
   
    setActiveSlide(0);

    setActiveLevel((prevLevel) => prevLevel + 1);
  };

  return (
    <div className="finish-button">
      <button onClick={handleFinishLevel}>Finish</button>
    </div>
  );
};

export default FinishButton;
