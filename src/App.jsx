import Header from './Header/Header';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Main from './Home/Main/Main';
import Benefits from './Home/Benefits/Benefits';
import Facilities from './Home/Facilities/Facilities';


const App = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Main />
        <Benefits />
        <Facilities />
      </>
    </BrowserRouter>
  );
};

export default App;
