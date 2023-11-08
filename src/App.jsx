import Header from './Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import HashRouting from './HashRouting/HashRouting';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';
import Home from './Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <HashRouting />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} end />
          <Route path="contato" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
