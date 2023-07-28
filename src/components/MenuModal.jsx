import React from 'react';

import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
const MenuModal = () => {
  const [active,setActive] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setActive(false)
  };

  const handleExit = () => {
    
    navigate('/');
  };

  return (
    <div className="menu-modal">
      <div className="menuIcon">
        <h3><i onClick={() => setActive(true)}><MenuIcon /></i> </h3>
        {active && (
          
          <MenuList className='menu-items'>
          <MenuItem onClick={handleClose}>Close</MenuItem>
          <MenuItem onClick={handleExit}>Exit</MenuItem>
          
          </MenuList>
            
         
        )}
      </div>
      
    </div>
  );
};

export default MenuModal;


