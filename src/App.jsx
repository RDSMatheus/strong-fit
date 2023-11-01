import Header from './Header/Header';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Main from './Home/Main/Main';
import Vantagens from './Home/Vantagens/Vantagens';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Main />
        <Vantagens />
      </>
    </BrowserRouter>
  );
};

export default App;
