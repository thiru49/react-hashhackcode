import React, { createContext, useState, useContext, useEffect } from 'react';
import data from "../data/data";

const SlideContext = createContext();

const SlideProvider = ({ children }) => {
  const [activeLevel, setActiveLevel] = useState(1);
  const [activeSlide, setActiveSlide] = useState(0);
  

  // Load previous state from localStorage if available
  useEffect(() => {
    const storedActiveLevel = parseInt(localStorage.getItem('activeLevel'));
    const storedActiveSlide = parseInt(localStorage.getItem('activeSlide'));
  

    if (storedActiveLevel && storedActiveSlide) {
      setActiveLevel(storedActiveLevel);
      setActiveSlide(storedActiveSlide);
    }

    
  }, []);

  // Save activeLevel, activeSlide, and completedLevels to localStorage when they change
  useEffect(() => {
    localStorage.setItem('activeLevel', activeLevel);
    localStorage.setItem('activeSlide', activeSlide);
    
  }, [activeLevel, activeSlide]);

  const levelData = data.level.find((level) => level.id === `level${activeLevel}`);

  const contextValue = {
    activeLevel,
    activeSlide,
    levelData,
    totalSlides: levelData ? levelData.slide.length : 0,
    
    setActiveLevel,
    setActiveSlide,
    
  };

  return <SlideContext.Provider value={contextValue}>{children}</SlideContext.Provider>;
};

const useSlideContext = () => {
  const context = useContext(SlideContext);
  if (!context) {
    throw new Error('useSlideContext must be used within a SlideProvider');
  }
  return context;
};

export { SlideProvider, useSlideContext };
