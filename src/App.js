import React, { useState } from 'react';
import './scss/app.scss';
import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

import { Route, Routes } from 'react-router-dom';
import { createContext } from 'react';
import FullPizza from './pages/FullPizza';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import OrderPage from './pages/OrderPage';

export const AppContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="App">
      <AppContext.Provider value={{ searchValue, setSearchValue }}>
        <div className="wrapper">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/reg" element={<RegisterPage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="*" element={<NotFound />} />
              <Route path="/order" element={<OrderPage />} />
            </Routes>
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
