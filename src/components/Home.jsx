import React from 'react';
import { useSlideContext } from './context/SlideContext';
import logo1 from './data/38 1.png';
import logo2 from './data/38 2.png';
import {useNavigate} from 'react-router-dom';


const Home = () => {
  const { activeLevel } = useSlideContext();
  const navigate = useNavigate();
 
  return (
    <div className="home" style={{position:"relative"}}>

      <div className="level" style={{position:'absolute'}}>
       <div className="contanier">
        <div className="items">
          <div className='card'>
            <div className="img"
            onClick={()=>
              {activeLevel >=1 ? navigate('/slidepage'):
              alert(`you are not complete the level${activeLevel}`)
              }}>
              <img 
                 src={activeLevel>=1?logo1:logo2} alt="level1" />
            </div>
            
            <h4 style={{marginLeft:"10px"}}>Level 1</h4>
          </div>
        </div>
        <div className="items"></div>
        <div className="items"></div>
        <div className="items">
        <div className='card'>
            <div className="img"
            onClick={()=>
              {activeLevel >=2 ? navigate('/slidepage'):
              alert(`you are not complete the level${activeLevel}`)
              }}>
              <img  src={activeLevel>=2?logo1:logo2} alt="level1" />
            </div>
            
            <h4 style={{marginLeft:"10px"}}>Level 2</h4>
          </div>
        </div>
        <div className="items">
        <div className='card'>
            <div className="img"
            onClick={()=>
              {activeLevel >=3 ? navigate('/slidepage'):
              alert(`you are not complete the level${activeLevel}`)
              }}>
              <img src={activeLevel>=3?logo1:logo2} alt="level1" />
            </div>
            
            <h4 style={{marginLeft:"10px"}}>Level 3</h4>
          </div>
        </div>
        <div className="items"></div>
        <div className="items">
          
        </div>
        <div className="items">
        <div className='card'>
            <div className="img">
              <img onClick={()=>{activeLevel>=4?navigate('/slidepage'):alert(`you are not complete the level${activeLevel}`)}} src={ activeLevel >=4 ?logo1:logo2} alt="level1" />
            </div>
            
            <h4 style={{marginLeft:"10px"}}>Level 4</h4>
          </div>
        </div>
        <div className="items">
        <div className='card'>
            <div className="img">
              <img onClick={()=>{activeLevel>=5?navigate('/slidepage'):alert(`you are not complete the level${activeLevel}`)}} src={activeLevel>=5?logo1:logo2} alt="level1" />
            </div>
            
            <h4 style={{marginLeft:"10px"}}>Level 5</h4>
          </div>
        </div>
        <div className="items"></div>
      </div>
       
      </div>
    </div>
  );
};

export default Home;
