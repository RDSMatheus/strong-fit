import React from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import './App.scss';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import ScrollToTop from './ScrollToTop';
import Register from './Register/Register';
import PageLayout from './PageLayout/PageLayout';
import Error404 from './Error/Error404';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <ScrollToTop />
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} end />
            <Route path="contato" element={<Contact />} />
          </Route>
          <Route path="register/:id" element={<Register />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
