import Header from './Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import HashRouting from './HashRouting/HashRouting';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import ScrollToTop from './ScrollToTop';
import Register from './Register/Register';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <HashRouting />
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} end />
          <Route path="contato" element={<Contact />} />
          <Route path="register/:id" element={<Register />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
