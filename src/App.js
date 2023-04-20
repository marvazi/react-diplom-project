import React, { useEffect, useState } from 'react';
import './scss/app.scss';
import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

import { Route, Routes } from 'react-router-dom';
import { createContext } from 'react';

export const AppContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="App">
      <AppContext.Provider value={{ searchValue, setSearchValue }}>
        <div className="wrapper">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
