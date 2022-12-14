import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Header  from './components/Header';
import Coins from './components/Coins';
import Exchanges from './components/Exchanges';
import CoinsDetails from './components/CoinsDetails'


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/coins' element={<Coins/>}/>
          <Route path='/exchanges' element={<Exchanges/>}/>
          <Route path='/coin/:id' element={<CoinsDetails/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
