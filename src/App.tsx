import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SellersPage} from './Pages/SellersPage';
import { PageNotFoundPage } from './Pages/PageNotFound';
import { ProductPage } from './Pages/ProductPage';
import { WelcomePage } from './Pages/WelcomePage';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar> 

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
