import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/*import { ProductPage } from './Pages/ProductPage';
*/
import { SellersPage} from './Pages/SellersPage';
/*import { WelcomePage} from './Pages/WelcomePage';
*/
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

        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
