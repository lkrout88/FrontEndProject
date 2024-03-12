import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SellersPage} from './Pages/SellersPage';
import { PageNotFoundPage } from './Pages/PageNotFound';
import { ProductPage } from './Pages/ProductPage';
import { WelcomePage } from './Pages/WelcomePage';
import { Navbar } from './Components/Navbar';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <Navbar></Navbar> 
        <button onClick={toggleTheme}>Light/Dark Mode</button>

        <Routes>
          <Route path="/" element={<WelcomePage></WelcomePage>} />
          <Route path="/home" element={<WelcomePage></WelcomePage>} />
          <Route path='/seller' element={<SellersPage></SellersPage>} />        
          <Route path='/product' element={<ProductPage></ProductPage>} />
          <Route path="*" element={<PageNotFoundPage></PageNotFoundPage>}></Route>
        </Routes>

      </BrowserRouter>
        
    </div>
  );
}

export default App;
