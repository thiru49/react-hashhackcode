import React from 'react';
import { SlidePage} from './components/index'; 
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

const App = () => {
  
  return (
    <Router>       
      <Routes>
        <Route path="/slidepage" element={<SlidePage />} />
        <Route path="/" element={<Home/>} />
        
     </Routes> 
    </Router>
     
  );
};

export default App;