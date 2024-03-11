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
/*import { Navbar } from './components/Navbar';
*/
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar></Navbar> */}
      <Routes>
       
        <Route path='seller' element={<SellersPage></SellersPage>} />
        
        </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
