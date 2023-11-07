import Header from './Header/Header';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Main from './Home/Main/Main';
import Benefits from './Home/Benefits/Benefits';
import Facilities from './Home/Facilities/Facilities';
import Plan from './Home/Plan/Plan';
import Footer from './Footer/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Main />
        <Benefits />
        <Facilities />
        <Plan />
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
